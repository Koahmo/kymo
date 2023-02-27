import React from 'react'

import {adminUser} from '../App'
export default function Home() {
  return (
    <div>
        <div className='top'>
            <h1 className='title'>Salut, {adminUser.name} !</h1>
        </div>
      <div className="dash-content">
            <div className="overview">
                <div className="title">
                    <i className='bx bxs-dashboard bx-tada' ></i>
                    <span className="text">XXX</span>
                </div>

                <div className="boxes">
                    <div className="box box1">
                        <i className='bx bxs-time-five bx-tada' ></i>
                        <span className="text">xxxxxxx</span>
                        <span className="number">xxxxxxx</span>
                    </div>
                    <div className="box box2">
                        <i className='bx bxs-time-five bx-tada' ></i>
                        <span className="text">xxxxxxx</span>
                        <span className="number">xxxxxxx</span>
                    </div>
                    <div className="box box3">
                        <i className='bx bxs-time-five bx-tada' ></i>
                        <span className="text">xxxxxxx</span>
                        <span className="number">xxxxxxx</span>
                    </div>
                </div>
            </div>

            <div className="activity">
                <div className="title">
                    <i className='bx bxs-time-five bx-tada' ></i>
                    <span className="text">xxxxxxx</span>
                </div>

                <div className="activity-data">
                    <div className="data names">
                        <span className="data-title">xxxxxxx</span>
                        <span className="data-list">xxxxxxx</span>
                        <span className="data-list">xxxxxxx</span>
                        <span className="data-list">xxxxxxx</span>
                        <span className="data-list">xxxxxxx</span>
                        <span className="data-list">xxxxxxx</span>
                        <span className="data-list">xxxxxxx</span>
                        <span className="data-list">xxxxxxx</span>
                    </div>
                    <div className="data email">
                        <span className="data-title">xxxxxxx</span>
                        <span className="data-list">xxxxxxx</span>
                        <span className="data-list">xxxxxxx</span>
                        <span className="data-list">xxxxxxx</span>
                        <span className="data-list">xxxxxxx</span>
                        <span className="data-list">xxxxxxx</span>
                        <span className="data-list">xxxxxxx</span>
                        <span className="data-list">xxxxxxx</span>
                    </div>
                    <div className="data joined">
                        <span className="data-title">xxxxxxx</span>
                        <span className="data-list">xxxxxxx</span>
                        <span className="data-list">xxxxxxx</span>
                        <span className="data-list">xxxxxxx</span>
                        <span className="data-list">xxxxxxx</span>
                        <span className="data-list">xxxxxxx</span>
                        <span className="data-list">xxxxxxx</span>
                        <span className="data-list">xxxxxxx</span>
                    </div>
                    <div className="data type">
                        <span className="data-title">xxxxxxx</span>
                        <span className="data-list">xxxxxxx</span>
                        <span className="data-list">xxxxxxx</span>
                        <span className="data-list">xxxxxxx</span>
                        <span className="data-list">xxxxxxx</span>
                        <span className="data-list">xxxxxxx</span>
                        <span className="data-list">xxxxxxx</span>
                        <span className="data-list">xxxxxxx</span>
                    </div>
                    <div className="data status">
                        <span className="data-title">xxxxxxx</span>
                        <span className="data-list">xxxxxxx</span>
                        <span className="data-list">xxxxxxx</span>
                        <span className="data-list">xxxxxxx</span>
                        <span className="data-list">xxxxxxx</span>
                        <span className="data-list">xxxxxxx</span>
                        <span className="data-list">xxxxxxx</span>
                        <span className="data-list">xxxxxxx</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

