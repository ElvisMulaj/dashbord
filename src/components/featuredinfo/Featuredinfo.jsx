import React from 'react'
import "./featuredinfo.css"
import { ArrowDownward, ArrowUpward } from '@material-ui/icons'

export default function Featuredinfo() {
  return (
   <div className="featured">
    <div className="featuredItem">
        <span className="featuredTitle">Revanue</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">$ 2,1234</span>
            <span className="featuredMoneyRate">
                -11
                 <ArrowDownward className="featuredIcon negative"/>
                  </span>
        </div>
        <span className="featuredSub">Compare to last month</span>
    </div>
    <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">$ 2,14</span>
            <span className="featuredMoneyRate">
                -1
                 <ArrowDownward/>
                  </span>
        </div>
        <span className="featuredSub">Compare to last month</span>
    </div>
    <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">$ 2,34</span>
            <span className="featuredMoneyRate">
                +14
                 <ArrowUpward className="featuredIcon " />
                  </span>
        </div>
        <span className="featuredSub">Compare to last month</span>
    </div>
   </div>
  )
}
