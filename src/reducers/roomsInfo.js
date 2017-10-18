import * as types from '../actions/roomsInfoActionTypes';

const initialState = {
    stateMarkerLat : '',
    stateMarkerLng : '',
    rooms: [
        {
            "id" : 0,
            "roomUrl" : "/detailedroom/0",
            "houseType" : "오피스텔",
            "contractType" : "월세",
            "shortDescription" : "★신축오피스텔★",
            "address" : "서울특별시 강남구 역삼동",
            "hashDescription" : [
                "#단기가능", 
                "#주차", 
                "#반려동물"
            ],
            "price" : 0,
            "deposit" : 1000,
            "rentalFee" : 100,
            "thisFloor" : 10,
            "totalFloors" : 19,
            "suppliedArea" : 52.4,
            "exclusiveArea" : 24.6,
            "managementExpenses" : 0,
            "managementType" : [
                "cleaningCost"
            ],
            "heatingSystem" : "개별난방",
            "pet" : true,
            "park" : true,
            "parkingFee" : "",
            "elevator" : true,
            "moveInDate" : "즉시입주",
            "detailedDescription" : [
                "★오피스텔★",
                "강남 최대규모", 
                "대량매물 보유중", 
                "#교통/위치",
                "2호선 강남역 5분거리", 
                "#구조/특징", 
                "관리비와 주차비는 개별확인 별도"
            ],
            "agentOffice" : "(주)씨에스부동산중개법인",
            "agentOfficeRepresentative" : "박청강",
            "realEstateAgent" : "장순준 대리(중개보조원)",
            "agentOfficeAddress" : "서울특별시 강남구 봉은사로 18길 13, 1층(역삼동)",
            "registrationNumber" : "11680-2017-00231",
            "roomPhoto" : [
                require("../images/rooms/room0/1.png"),
                require("../images/rooms/room0/2.png"),
                require("../images/rooms/room0/3.png"),
                require("../images/rooms/room0/4.png"),
                require("../images/rooms/room0/5.png"),
                require("../images/rooms/room0/6.png")
            ],
            "markerLat" : 37.501947,
            "markerLng" : 127.034821
        },

        {
            "id" : 1,
            "roomUrl" : "/detailedroom/1",
            "houseType" : "원룸",
            "contractType" : "월세",
            "shortDescription" : "강남역5분거리 깔끔한 여성분 추천 단기방",
            "address" : "서울특별시 서초구 서초동",
            "hashDescription" : [
                "#단기가능",
                "#반려동물"
            ],
            "price" : 0,
            "deposit" : 85,
            "rentalFee" : 85,
            "thisFloor" : 2,
            "totalFloors" : 4,
            "suppliedArea" : 36.3,
            "exclusiveArea" : 29.7,
            "managementExpenses" : 0,
            "managementType" : [
                "waterRates",
                "internet"
            ],
            "heatingSystem" : "개별난방",
            "pet" : true,
            "park" : true,
            "parkingFee" : "",
            "elevator" : true,
            "moveInDate" : "즉시입주",
            "detailedDescription" : [
                "안녕하세요^^ 강남구 원룸, 투룸, 오피스텔 전월세 전문 가온부동산입니다.",
                "원하시는 위치와 조건을 최대한 맞춰서", 
                "손님분들께 알맞는 방을 구해드리고 있습니다.", 
                "보증금 조절은 200만원당 1만원 조절입니다. ex : 1000/50, 2000/45",
                "보증금이 낮아지면 월세가 올라갑니다.", 
                "2시간 문이 가능합니다. 자다가도 연락받습니다."
            ],
            "agentOffice" : "가온공인중개사무소",
            "agentOfficeRepresentative" : "김관호",
            "realEstateAgent" : "김관호 소장(대표공인중개사)",
            "agentOfficeAddress" : "서울특별시 강남구 논현로85길 52 비111호",
            "registrationNumber" : "11680-2017-00241",
            "roomPhoto" : [
                require("../images/rooms/room1/1.png"),
                require("../images/rooms/room1/2.png"),
                require("../images/rooms/room1/3.png"),
                require("../images/rooms/room1/4.png"),
                require("../images/rooms/room1/5.png")
            ],
            "markerLat" : 37.488724,
            "markerLng" : 127.009603
        },

        {
            "id" : 2,
            "roomUrl" : "/detailedroom/2",
            "houseType" : "투룸",
            "contractType" : "전세",
            "shortDescription" : "★화곡역초역세권 ★신축 투룸 첫입주 전세",
            "address" : "서울특별시 강서구 화곡동",
            "hashDescription" : [
                "#주차"
            ],
            "price" : 0,
            "deposit" : 17000,
            "rentalFee" : 0,
            "thisFloor" : 4,
            "totalFloors" : 6,
            "suppliedArea" : 49.5,
            "exclusiveArea" : 42.9,
            "managementExpenses" : 3,
            "managementType" : [
                "cleaningCost"
            ],
            "heatingSystem" : "개별난방",
            "pet" : false,
            "park" : true,
            "parkingFee" : "",
            "elevator" : true,
            "moveInDate" : "즉시입주",
            "detailedDescription" : [
                "★화곡역 도보 3분 초역세권 위치",
                "★2017년식 엘베있는 신축빌라 첫입주", 
                "★버스정류장인접 버스이용도 편리", 
                "★대형병원, 재래시장, 주민센터등 근거리 편의시설인접"
            ],
            "agentOffice" : "드림공인중개사사무소",
            "agentOfficeRepresentative" : "조성현",
            "realEstateAgent" : "임미영 실장(소속공인중개사)",
            "agentOfficeAddress" : "서울특별시 강남구 화곡동 1075-12 1층 (102호)",
            "registrationNumber" : "92400000-01-05209",
            "roomPhoto" : [
                require("../images/rooms/room2/1.png"),
                require("../images/rooms/room2/2.png"),
                require("../images/rooms/room2/3.png"),
                require("../images/rooms/room2/4.png"),
                require("../images/rooms/room2/5.png"),
                require("../images/rooms/room2/6.png"),
                require("../images/rooms/room2/7.png"),
                require("../images/rooms/room2/8.png"),
                require("../images/rooms/room2/9.png"),
                require("../images/rooms/room2/10.png")
            ],
            "markerLat" : 37.543327,
            "markerLng" : 126.840686
        },

        {
            "id" : 3,
            "roomUrl" : "/detailedroom/3",
            "houseType" : "1.5룸",
            "contractType" : "월세",
            "shortDescription" : "★★석촌호수 도보 2분거리★★",
            "address" : "서울특별시 송파구 삼전동",
            "hashDescription" : [
                "#주차"
            ],
            "price" : 0,
            "deposit" : 3000,
            "rentalFee" : 45,
            "thisFloor" : 4,
            "totalFloors" : 5,
            "suppliedArea" : 26.4,
            "exclusiveArea" : 26.4,
            "managementExpenses" : 3,
            "managementType" : [
                "television"
            ],
            "heatingSystem" : "개별난방",
            "pet" : false,
            "park" : true,
            "parkingFee" : "",
            "elevator" : false,
            "moveInDate" : "즉시입주",
            "detailedDescription" : [
                "★★ 방 소 개 ★★",
                "구분▶ 분리형 원룸(베란다)",
                "위치▶ 삼전동 상단 (석촌동 도보 2분거리)",
                "금액▶ 3000/45 (관리비 3만원)",
                "옵션▶ 에어컨, 싱크대, 베란다",
                "주차▶ 가능"
            ],
            "agentOffice" : "에이스공인중개사사무소",
            "agentOfficeRepresentative" : "백승원",
            "realEstateAgent" : "송무열 과장(중개보조원)",
            "agentOfficeAddress" : "서울특별시 송파구 잠실동 245-16",
            "registrationNumber" : "11710-2017-00097",
            "roomPhoto" : [
                require("../images/rooms/room3/1.png"),
                require("../images/rooms/room3/2.png"),
                require("../images/rooms/room3/3.png"),
                require("../images/rooms/room3/4.png"),
                require("../images/rooms/room3/5.png"),
                require("../images/rooms/room3/6.png"),
                require("../images/rooms/room3/7.png"),
                require("../images/rooms/room3/8.png")
            ],
            "markerLat" : 37.502579,
            "markerLng" : 127.090326
        },

        {
            "id" : 4,
            "roomUrl" : "/detailedroom/4",
            "houseType" : "원룸",
            "contractType" : "월세",
            "shortDescription" : "★★레몬에서 가장 저렴한방 즉시입주",
            "address" : "서울특별시 서초구 서초동",
            "hashDescription" : [
                "#주차",
                "#직거래"
            ],
            "price" : 0,
            "deposit" : 300,
            "rentalFee" : 30,
            "thisFloor" : 6,
            "totalFloors" : 15,
            "suppliedArea" : 19.8,
            "exclusiveArea" : 9.9,
            "managementExpenses" : 5,
            "managementType" : [
                "none"
            ],
            "heatingSystem" : "개별난방",
            "pet" : false,
            "park" : true,
            "parkingFee" : "(5만원)",
            "elevator" : true,
            "moveInDate" : "즉시입주",
            "detailedDescription" : [
                "- 남부터미널역 도보2분 대로가 초특급역세권 최저가임대료 생활비절감",
                "- 여자층 레몬최저가",
                "- 즉시입주",
                "- 공용샤워장 세탁실사용 매일청소하여 깨끗 층별 샤워장3개 화장실3개 탕비실 세탁실별도",
                "- 세대내 쿡탑 미니냉장고 에어컨 책상 붙박이장 침대 완비",
                "- 개별냉난방(전기) 관리비는 정액이아닌 개별 전기사용량별도 다쓰시면 7~10만원선"
            ],
            "agentOffice" : "부동산골드공인중개사사무소",
            "agentOfficeRepresentative" : "이동명",
            "realEstateAgent" : "이동명 대표(대표공인중개사)",
            "agentOfficeAddress" : "서울특별시 서초구 서초중앙로49 동양라디안 루키 102호",
            "registrationNumber" : "가-9250-2534",
            "roomPhoto" : [
                require("../images/rooms/room4/1.png"),
                require("../images/rooms/room4/2.png"),
                require("../images/rooms/room4/3.png"),
                require("../images/rooms/room4/4.png")
            ],
            "markerLat" : 37.485772,
            "markerLng" : 127.015258
        },

        {
            "id" : 5,
            "roomUrl" : "/detailedroom/5",
            "houseType" : "오피스텔",
            "contractType" : "전세",
            "shortDescription" : "남부터미널역 인근, 귀한 전세, 10월초입주",
            "address" : "서울특별시 서초구 서초동",
            "hashDescription" : [
                "#주차"
            ],
            "price" : 0,
            "deposit" : 9500,
            "rentalFee" : 0,
            "thisFloor" : 9,
            "totalFloors" : 10,
            "suppliedArea" : 40.3,
            "exclusiveArea" : 21.7,
            "managementExpenses" : 9,
            "managementType" : [
                "none"
            ],
            "heatingSystem" : "개별난방",
            "pet" : false,
            "park" : true,
            "parkingFee" : "(6만원)",
            "elevator" : true,
            "moveInDate" : "날짜협의",
            "detailedDescription" : [
                "- 남부터미널역 도보 5분거리, 오픈형 오피스텔.",
                "- 귀한 전세 : 전세권 설정조건임",
                "- 옵션 : 에어컨, 세탁기, 냉장고, 인덕션, 옷장 등",
                "- 입주는 협의(10월초 입주 가능)"
            ],
            "agentOffice" : "부동산골드공인중개사사무소",
            "agentOfficeRepresentative" : "이동명",
            "realEstateAgent" : "이동명 대표(대표공인중개사)",
            "agentOfficeAddress" : "서울특별시 서초구 서초중앙로49 동양라디안 루키 102호",
            "registrationNumber" : "가-9250-2534",
            "roomPhoto" : [
                require("../images/rooms/room5/1.png"),
                require("../images/rooms/room5/2.png"),
                require("../images/rooms/room5/3.png"),
                require("../images/rooms/room5/4.png")
            ],
            "markerLat" : 37.486597,
            "markerLng" : 127.013842
        },

        {
            "id" : 6,
            "roomUrl" : "/detailedroom/6",
            "houseType" : "아파트",
            "contractType" : "매매",
            "shortDescription" : "전망 좋음",
            "address" : "서울특별시 중랑구 망우동",
            "hashDescription" : [
            ],
            "price" : 51000,
            "deposit" : 0,
            "rentalFee" : 0,
            "thisFloor" : 19,
            "totalFloors" : 28,
            "suppliedArea" : 111.3,
            "exclusiveArea" : 84.7,
            "managementExpenses" : 0,
            "managementType" : [
                "none"
            ],
            "heatingSystem" : "개별난방",
            "pet" : false,
            "park" : false,
            "parkingFee" : "",
            "elevator" : false,
            "moveInDate" : "즉시입주",
            "detailedDescription" : [
                "@망우동 최고위치에 있는 494세대 아파트입니다.",
                "@망우역도보 3분 이마트 도보1분거리", 
                "@대형마트, 이마트, 홈플러스, 코스트코가 있음", 
                "@망우역 상봉역",
                "관리비 별도 있어요"
            ],
            "agentOffice" : "써니부동산공인중개사사무소",
            "agentOfficeRepresentative" : "박은경",
            "realEstateAgent" : "박은경 대표(대표공인중개사)",
            "agentOfficeAddress" : "서울특별시 중랑구 용마산로115길 127, 101동 지1층 에스108호",
            "registrationNumber" : "92290000-2592",
            "roomPhoto" : [
                require("../images/rooms/room6/1.png"),
                require("../images/rooms/room6/2.png"),
                require("../images/rooms/room6/3.png"),
                require("../images/rooms/room6/4.png"),
                require("../images/rooms/room6/5.png"),
                require("../images/rooms/room6/6.png"),
                require("../images/rooms/room6/7.png")
            ],
            "markerLat" : 37.600667,
            "markerLng" : 127.098561
        },

        {
            "id" : 7,
            "roomUrl" : "/detailedroom/7",
            "houseType" : "투룸",
            "contractType" : "월세",
            "shortDescription" : "이태원 엔틱거리 투룸 월세",
            "address" : "서울특별시 용산구 이태원동",
            "hashDescription" : [
                
            ],
            "price" : 0,
            "deposit" : 1000,
            "rentalFee" : 65,
            "thisFloor" : 1,
            "totalFloors" : 4,
            "suppliedArea" : 40.0,
            "exclusiveArea" : 40.0,
            "managementExpenses" : 0,
            "managementType" : [
                "internet",
                "television"
            ],
            "heatingSystem" : "개별난방",
            "pet" : false,
            "park" : false,
            "parkingFee" : "",
            "elevator" : false,
            "moveInDate" : "날짜협의",
            "detailedDescription" : [
                "이태원역 도보 5분거리 도로변 근생주택 1층",
                "방2개 내부상태 양호함", 
                "10월10일이후 이사협의"
            ],
            "agentOffice" : "플러스공인중개사사무소",
            "agentOfficeRepresentative" : "정재수",
            "realEstateAgent" : "정재수 대표(대표공인중개사)",
            "agentOfficeAddress" : "서울특별시 용산구 보광로24길 13. 1층(보광동)",
            "registrationNumber" : "11170-2015-00219",
            "roomPhoto" : [
                require("../images/rooms/room7/1.png"),
                require("../images/rooms/room7/2.png"),
                require("../images/rooms/room7/3.png"),
                require("../images/rooms/room7/4.png"),
                require("../images/rooms/room7/5.png")
            ],
            "markerLat" : 37.537926,
            "markerLng" : 126.996022
        },

        {
            "id" : 8,
            "roomUrl" : "/detailedroom/8",
            "houseType" : "투룸",
            "contractType" : "월세",
            "shortDescription" : "투룸 창문이 큰 방",
            "address" : "서울특별시 서초구 반포동",
            "hashDescription" : [
                "#직거래",
                "#단기가능",
                "#주차"
            ],
            "price" : 0,
            "deposit" : 2000,
            "rentalFee" : 60,
            "thisFloor" : 2,
            "totalFloors" : 3,
            "suppliedArea" : 46.0,
            "exclusiveArea" : 46.0,
            "managementExpenses" : 5,
            "managementType" : [
                "cleaningCost",
                "waterRates"
            ],
            "heatingSystem" : "개별난방",
            "pet" : false,
            "park" : true,
            "parkingFee" : "",
            "elevator" : false,
            "moveInDate" : "즉시입주",
            "detailedDescription" : [
                "조용하고 서울고속터미널과 도보 15분거리. 강남성모병원과 도보 10분거리"
            ],
            "agentOffice" : "한백부동산사무소",
            "agentOfficeRepresentative" : "최범석",
            "realEstateAgent" : "엄병채 부장(소속공인중개사)",
            "agentOfficeAddress" : "서울특별시 강남구 언주로 97길 34, 101호",
            "registrationNumber" : "9250-12207",
            "roomPhoto" : [
                require("../images/rooms/room8/1.png"),
                require("../images/rooms/room8/2.png")
            ],
            "markerLat" : 37.504804,
            "markerLng" : 126.998931
        },

        {
            "id" : 9,
            "roomUrl" : "/detailedroom/9",
            "houseType" : "원룸",
            "contractType" : "월세",
            "shortDescription" : "탁트인 전망 방과주방 분리",
            "address" : "서울특별시 영등포구 여의도동",
            "hashDescription" : [
                "#주차"
            ],
            "price" : 0,
            "deposit" : 1000,
            "rentalFee" : 90,
            "thisFloor" : 7,
            "totalFloors" : 40,
            "suppliedArea" : 75.9,
            "exclusiveArea" : 39.6,
            "managementExpenses" : 16,
            "managementType" : [
                "television"
            ],
            "heatingSystem" : "개별난방",
            "pet" : false,
            "park" : true,
            "parkingFee" : "",
            "elevator" : true,
            "moveInDate" : "2017.09.01",
            "detailedDescription" : [
                "*63빌딩과 인접하고 주상복합 아파트와 오피스텔이 동시 입주되어 있습니다.",
                "*88도로, 내부순환도로, 공항버스등도 편리하게 이용 가능한 교통팔달 지역입니다.",
                "*주차 1대, 2~24시간 할인권. 아파트는 3대주차 가능합니다.",
                "*영원히 변하지 않는 한강 조망권을 자랑합니다.",
                "*아파트는 43,47,53,57,64평등 팬트하우스와 오피스텔 19~23평대로 구성"

            ],
            "agentOffice" : "라첸시아공인중개사사무소",
            "agentOfficeRepresentative" : "안순옥",
            "realEstateAgent" : "안순옥 대표(대표공인중개사)",
            "agentOfficeAddress" : "서울특별시 영등포구 여의도동 61 여의도금호리첸시아A 203호",
            "registrationNumber" : "92440000-07800",
            "roomPhoto" : [
                require("../images/rooms/room9/1.png"),
                require("../images/rooms/room9/2.png"),
                require("../images/rooms/room9/3.png"),
                require("../images/rooms/room9/4.png"),
                require("../images/rooms/room9/5.png"),
                require("../images/rooms/room9/6.png")
            ],
            "markerLat" : 37.528102,
            "markerLng" : 126.920596
        }],
        indexFilter : function(id){
            const isRoom = p => p.id === id
            return this.rooms.filter(isRoom)
        }
};

function roomsInfo(state = initialState, action) {
        switch (action.type) {
        case types.MOUSE_OVER: 
            return {
                ...state,
                stateMarkerLat : action.e.target.dataset.markerlat,
                stateMarkerLng : action.e.target.dataset.markerlng
            };
        case types.MOUSE_OUT:
            return {
                ...state,
                stateMarkerLat : '',
                stateMarkerLng : '',
            };
        default:
            return state;
    }
}

export default roomsInfo