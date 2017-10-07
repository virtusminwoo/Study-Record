import React from 'react';
import ProductNavLeftTableDiv from './ProductNavLeftTableDiv'
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
                <ProductNavLeftTableDiv className={isShowDownProduct? "RoomSearchNavLeftDivDiv RoomSearchNavLeftDivDivOpen" : "RoomSearchNavLeftDivDiv"} onClick={isShowDownProduct ? ClickSet : ClickProduct} text={"매물종류"}/>
                <ProductNavLeftTableDiv className={isShowDownDeal? "RoomSearchNavLeftDivDiv RoomSearchNavLeftDivDivOpen" : "RoomSearchNavLeftDivDiv"} onClick={isShowDownDeal ? ClickSet : ClickDeal} text={"거래종류"}/>
                <ProductNavLeftTableDiv className={isShowDownRoom? "RoomSearchNavLeftDivDiv RoomSearchNavLeftDivDivOpen" : "RoomSearchNavLeftDivDiv"} onClick={isShowDownRoom ? ClickSet : ClickRoom} text={"방 종류"}/>
                <ProductNavLeftTableDiv className={isShowDownDeposit? "RoomSearchNavLeftDivDiv RoomSearchNavLeftDivDivDeposit RoomSearchNavLeftDivDivOpen" : "RoomSearchNavLeftDivDiv RoomSearchNavLeftDivDivDeposit"} onClick={isShowDownDeposit ? ClickSet : ClickDeposit} text={"0만원 ~ 무제한"}/>
                <ProductNavLeftTableDiv className={isShowDownFee? "RoomSearchNavLeftDivDiv RoomSearchNavLeftDivDivFee RoomSearchNavLeftDivDivOpen" : "RoomSearchNavLeftDivDiv RoomSearchNavLeftDivDivFee"} onClick={isShowDownFee ? ClickSet : ClickFee} text={"0만원 ~ 무제한"}/>
                <ProductNavLeftTableDiv className={isShowDownOption? "RoomSearchNavLeftDivDiv RoomSearchNavLeftDivDivOpen" : "RoomSearchNavLeftDivDiv"} onClick={isShowDownOption ? ClickSet : ClickOption} text={"추가옵션"}/>
                {showDown}
            </div>
        )
    }


export default ProductNavLeftTable;