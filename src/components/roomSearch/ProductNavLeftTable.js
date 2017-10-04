import React,{Component} from 'react';
import ShowProduct from './ShowProduct'
import ShowDeal from './ShowDeal'
import ShowRoom from './ShowRoom'
import ShowDeposit from './ShowDeposit'
import ShowFee from './ShowFee'
import ShowOption from './ShowOption'



const ProductNavLeftTable = ({showProduct,showDeal,showRoom,showDeposit,showFee,showOption,showSet,ClickProduct,ClickDeal,ClickRoom,ClickDeposit,ClickFee,ClickOption,ClickSet}) => {
        let showDown;
        if(showProduct){
            showDown=(
                <div>
                    <ShowProduct />
                </div>
            )
        } else if(showDeal){
            showDown=(
                <div>
                    <ShowDeal />
                </div>
            )
        } else if(showRoom){
            showDown=(
                <div>
                    <ShowRoom />
                </div>
            )
        } else if(showDeposit){
            showDown=(
                <div>
                    <ShowDeposit />
                </div>
            )
        } else if(showFee){
            showDown=(
                <div>
                    <ShowFee />
                </div>
            )
        } else if(showOption){
            showDown=(
                <div>
                    <ShowOption />
                </div>
            )
        }

        const isShowDownProduct = showProduct
        const isShowDownDeal = showDeal
        const isShowDownRoom = showRoom
        const isShowDownDeposit = showDeposit
        const isShowDownFee = showFee
        const isShowDownOption = showOption
        return (
            <div>
            <div className="RoomSearchNavLeft">
                <div className="RoomSearchNavLeftDiv">
                    <div className={isShowDownProduct? "RoomSearchNavLeftDivDiv RoomSearchNavLeftDivDivOpen" : "RoomSearchNavLeftDivDiv"} onClick={isShowDownProduct ? ClickSet : ClickProduct}>
                        매물종류
                    </div>
                </div>
                <div className="RoomSearchNavLeftDiv">
                    <div className={isShowDownDeal? "RoomSearchNavLeftDivDiv RoomSearchNavLeftDivDivOpen" : "RoomSearchNavLeftDivDiv"} onClick={isShowDownDeal ? ClickSet : ClickDeal}>
                        거래종류
                    </div>
                </div>
                <div className="RoomSearchNavLeftDiv">
                    <div className={isShowDownRoom? "RoomSearchNavLeftDivDiv RoomSearchNavLeftDivDivOpen" : "RoomSearchNavLeftDivDiv"} onClick={isShowDownRoom ? ClickSet : ClickRoom}>
                        방 종류
                    </div>
                </div>
                <div className="RoomSearchNavLeftDiv">
                    <div className={isShowDownDeposit? "RoomSearchNavLeftDivDiv RoomSearchNavLeftDivDivDeposit RoomSearchNavLeftDivDivOpen" : "RoomSearchNavLeftDivDiv RoomSearchNavLeftDivDivDeposit"} onClick={isShowDownDeposit ? ClickSet : ClickDeposit}>
                        0 만원 ~ 무제한
                    </div>
                </div>
                <div className="RoomSearchNavLeftDiv">
                    <div className={isShowDownFee? "RoomSearchNavLeftDivDiv RoomSearchNavLeftDivDivFee RoomSearchNavLeftDivDivOpen" : "RoomSearchNavLeftDivDiv RoomSearchNavLeftDivDivFee"} onClick={isShowDownFee ? ClickSet : ClickFee}>
                        0 만원 ~ 무제한
                    </div>
                </div>
                <div className="RoomSearchNavLeftDiv">
                    <div className={isShowDownOption? "RoomSearchNavLeftDivDiv RoomSearchNavLeftDivDivOpen" : "RoomSearchNavLeftDivDiv"} onClick={isShowDownOption ? ClickSet : ClickOption}>
                        추가옵션
                    </div>
                </div>
                {showDown}
            </div>
            </div>
        );
    }


export default ProductNavLeftTable;