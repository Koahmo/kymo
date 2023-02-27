import React from 'react'
import Quagga from 'quagga'; // ES6
class Scanner extends React.Component {
  componentDidMount() {
    Quagga.init({
      inputStream: {
          name: "Live",
          type: "LiveStream",
          target: document.querySelector('#scanner-container'),
          constraints: {
              width: 480,
              height: 320,
              facingMode: "environment"
          },
      },
      decoder: {
          readers: [
              "ean_reader",
          ],
          debug: {
              showCanvas: true,
              showPatches: true,
              showFoundPatches: true,
              showSkeleton: true,
              showLabels: true,
              showPatchLabels: true,
              showRemainingPatchLabels: true,
              boxFromPatches: {
                  showTransformed: true,
                  showTransformedBox: true,
                  showBB: true
              }
          }
      },

  }, function (err) {
      if (err) {
          console.log(err);
          return
      }

      Quagga.start();

  });

  Quagga.onProcessed(function (result) {
    let drawingCtx = Quagga.canvas.ctx.overlay,
    drawingCanvas = Quagga.canvas.dom.overlay;

    if (result) {
        if (result.boxes) {
            drawingCtx.clearRect(0, 0, parseInt(drawingCanvas.getAttribute("width")), parseInt(drawingCanvas.getAttribute("height")));
            result.boxes.filter(function (box) {
                return box !== result.box;
            }).forEach(function (box) {
                Quagga.ImageDebug.drawPath(box, { x: 0, y: 1 }, drawingCtx, { color: "green", lineWidth: 2 });
            });
        }

        if (result.box) {
            Quagga.ImageDebug.drawPath(result.box, { x: 0, y: 1 }, drawingCtx, { color: "#00F", lineWidth: 2 });
        }

        if (result.codeResult && result.codeResult.code) {
            Quagga.ImageDebug.drawPath(result.line, { x: 'x', y: 'y' }, drawingCtx, { color: 'red', lineWidth: 3 });
        }
    }
  });

    Quagga.onDetected(this._onDetected)

}

  componentWillUnmount() {
    Quagga.offDetected(this._onDetected)
  }

  _onDetected = result => {
    this.props.onDetected(result)
  }

  render() {

    return <div id="interactive" className="viewport">
    </div>

    }
}

class BarcodeScanner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true ,
            product: [{
                id :26761,
                img:'https://jardinage.lemonde.fr/images/dossiers/categories3/racedecien-083123-650-325.jpg',
                name:'Chien',
                grade:'A',
                quantity:"1",

            },
                {
                    id :2612341,
                    img:'https://images.ladepeche.fr/api/v1/images/view/63600c1986a82e7a5a29be4b/large/image.jpg?v=2',
                    name:'Chat',
                    grade:'A',
                    quantity:"1",
                },]};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }


    _onDetected = (result) => {


        this.setState({ results: []})
        this.setState({ results: this.state.results.concat([result])})

        if (this.state.results.length > 2) {

          let lastproductid = this.state.results[this.state.results.length-2].codeResult.code
          let productid = result.codeResult.code

          if (lastproductid !== productid) {

            let url = "https://fr.openfoodfacts.org/api/v2/product/"+ productid;

            //console.log(url)


            fetch(url)
            .then((resp) => {

            return resp.json();
            })

            .then((data) => {

              if (data.status_verbose === "product found") {


                this.setState({product: this.state.product.concat([
                    {
                        id : data.product['id'],
                        img: data.product['image_front_small_url'],
                        name: data.product['product_name_fr'],
                        grade: data.product['nutriscore_grade'],
                        nutriment: data.product["nutrient_levels"],
                        quantity: data.product["quantity"],
                    },
                    ])})

                  {this.handleClick()}
              }
            })
          }
        }


    }

    render() {
        if (this.state.product !== undefined)
            console.log(this.state.product)
        return(
            <div>
                {this.state.isToggleOn ? (
                    <div>
                        <div className='top'>
                            <h1 className='text'>Le frigo est bien rempli chacal ?</h1>
                            <button onClick={this.handleClick}>
                                <i className='bx bx-plus-circle'></i>
                                <span>Ajouter un article</span>
                            </button>
                        </div>

                        <div className="menu-items">
                            <ul className="nav-links">
                                <div className='dash-content'>
                                    <div className='grid'>
                                        {this.state.product.map((item,index)=>{
                                            return(
                                                <li key={index}>
                                                    <div className="overview">
                                                        <div className='boxes' >
                                                            <div className="article">
                                                                <img src={item.img}
                                                                     width="100%"
                                                                     height="100%"
                                                                     alt={item.name}/>
                                                                <span>{item.name}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div>

                ) : (

                    <div>
                        <div className='top'>
                            <h1 className='text'>Le frigo est bien rempli chacal ?</h1>
                            <button onClick={this.handleClick}>
                                <i className='bx bx-arrow-back'/>
                                <span>Retour</span>
                            </button>
                        </div>
                        <Scanner onDetected={this._onDetected} />
                    </div>
                )}
            </div>
        )
    }

}
function Frigo() {

  return (
      <BarcodeScanner/>
  )
}

export default Frigo
/*
data.product['id'],
    data.product['image_front_small_url'],
    data.product['product_name_fr'],
    data.product['nutriscore_grade'],
    data.product['nutrient_levels'],
    data.product['quantity']

 */