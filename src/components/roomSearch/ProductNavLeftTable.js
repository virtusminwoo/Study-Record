import React,{Component} from 'react';
import ShowProduct from './ShowProduct'
import ShowDeal from './ShowDeal'
import ShowRoom from './ShowRoom'
import ShowDeposit from './ShowDeposit'
import ShowFee from './ShowFee'
import ShowOption from './ShowOption'

class ProductNavLeftTable  extends Component {
    constructor(){
        super();
        this.state={
            showProduct : false,
            showDeal : false,
            showRoom : false,
            showDeposit : false,
            showFee : false,
            showOption : false
        }
    }

    clickProduct(){
        this.setState({
            showProduct: true,
            showDeal : false,
            showRoom : false,
            showDeposit : false,
            showFee : false,
            showOption : false
        })
    }

    clickDeal(){
        this.setState({
            showProduct: false,
            showDeal : true,
            showRoom : false,
            showDeposit : false,
            showFee : false,
            showOption : false
        })
    }

    clickRoom(){
        this.setState({
            showProduct: false,
            showDeal : false,
            showRoom : true,
            showDeposit : false,
            showFee : false,
            showOption : false
        })
    }

    clickDeposit(){
        this.setState({
            showProduct: false,
            showDeal : false,
            showRoom : false,
            showDeposit : true,
            showFee : false,
            showOption : false
        })
    }

    clickFee(){
        this.setState({
            showProduct: false,
            showDeal : false,
            showRoom : false,
            showDeposit : false,
            showFee : true,
            showOption : false
        })
    }

    clickOption(){
        this.setState({
            showProduct: false,
            showDeal : false,
            showRoom : false,
            showDeposit : false,
            showFee : false,
            showOption : true
        })
    }

    render() {
        let showDown;
        if(this.state.showProduct){
            showDown=(
                <div>
                    <ShowProduct />
                </div>
            )
        } else if(this.state.showDeal){
            showDown=(
                <div>
                    <ShowDeal />
                </div>
            )
        } else if(this.state.showRoom){
            showDown=(
                <div>
                    <ShowRoom />
                </div>
            )
        } else if(this.state.showDeposit){
            showDown=(
                <div>
                    <ShowDeposit />
                </div>
            )
        } else if(this.state.showFee){
            showDown=(
                <div>
                    <ShowFee />
                </div>
            )
        } else if(this.state.showOption){
            showDown=(
                <div>
                    <ShowOption />
                </div>
            )
        }
        return (
            <div>
            <div className="RoomSearchNavLeft">
                <div className="RoomSearchNavLeftDiv">
                    <div className="RoomSearchNavLeftDivDiv" onClick={this.clickProduct.bind(this)}>
                        매물종류
                    </div>
                </div>
                <div className="RoomSearchNavLeftDiv">
                    <div className="RoomSearchNavLeftDivDiv" onClick={this.clickDeal.bind(this)}>
                        거래종류
                    </div>
                </div>
                <div className="RoomSearchNavLeftDiv">
                    <div className="RoomSearchNavLeftDivDiv" onClick={this.clickRoom.bind(this)}>
                        방 종류
                    </div>
                </div>
                <div className="RoomSearchNavLeftDiv">
                    <div className="RoomSearchNavLeftDivDiv RoomSearchNavLeftDivDivDeposit" onClick={this.clickDeposit.bind(this)}>
                        0 만원 ~ 무제한
                    </div>
                </div>
                <div className="RoomSearchNavLeftDiv">
                    <div className="RoomSearchNavLeftDivDiv RoomSearchNavLeftDivDivFee" onClick={this.clickFee.bind(this)}>
                        0 만원 ~ 무제한
                    </div>
                </div>
                <div className="RoomSearchNavLeftDiv">
                    <div className="RoomSearchNavLeftDivDiv" onClick={this.clickOption.bind(this)}>
                        추가옵션
                    </div>
                </div>
                {showDown}
            </div>
            </div>
        );
    }
}

export default ProductNavLeftTable;