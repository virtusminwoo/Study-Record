const RoomAPI = {
  rooms: [
    {
        "id" : 1,
        "buildingType" : "오피스텔",
        "rentType" : "월세",
        "shortDescription" : "★신축오피스텔★",
        "domicile" : "서울특별시 강남구 역삼동",
        "hashDescription" : [
            "#단기가능", 
            "#주차" , 
            "#반려동물"
        ],
        "depositFee" : "1000/100",
        "layers" : "10 층 19 층",
        "area" : "24.6㎡ / 52.4㎡",
        "administrativeFee" : 0,
        "administrativeType" : "청소비",
        "heatingType" : "개별난방",
        "pet" : "가능",
        "park" : "가능",
        "elevator" : "있음",
        "inToDay" : "즉시입주",
        "detailedDescription" : [
            "★오피스텔★",
            "강남 최대규모", 
            "대량매물 보유중", 
            "#교통/위치",
            "2호선 강남역 5분거리", 
            "#구조/특징", 
            "관리비와 주차비는 개별확인 별도",
            "#주차/편의시설",
            "주차가능 강남구 근처"
        ],
        "dealerInc" : "(주)씨에스부동산중개법인",
        "dealerIncCEO" : "박청강",
        "dealer" : "장순준 대리(중개보조원)",
        "dealerIncDomicile" : "서울특별시 강남구 봉은사로 18길 13, 1층(역삼동)",
        "registrationNumber" : "11680-2017-00231",
        "roomPhoto" : [
            "R1_1",
            "R1_2",
            "R1_3",
            "R1_4"
        ]
    },

    {
        "id" : 2,
        "buildingType" : "원룸",
        "rentType" : "월세",
        "shortDescription" : "강남역5분거리 깔끔한 여성분 추천 단기방",
        "domicile" : "서울특별시 서초수 서초동",
        "hashDescription" : [
            "#단기가능", 
            "#반려동물"
        ],
        "depositFee" : "85/85",
        "layers" : "2 층 4 층",
        "area" : "29.7㎡ / 36.3㎡",
        "administrativeFee" : "-",
        "administrativeType" : "-",
        "heatingType" : "개별난방",
        "pet" : "가능",
        "park" : "가능",
        "elevator" : "있음",
        "inToDay" : "즉시입주",
        "detailedDescription" : [
            "안녕하세요^^ 강남구 원룸, 투룸, 오피스텔 전월세 전문 가온부동산입니다.",
            "원하시는 위치와 조건을 최대한 맞춰서", 
            "손님분들께 알맞는 방을 구해드리고 있습니다.", 
            "보증금 조절은 200만원당 1만원 조절입니다. ex : 1000/50, 2000/45",
            "보증금이 낮아지면 월세가 올라갑니다.", 
            "2시간 문이 가능합니다. 자다가도 연락받습니다."
        ],
        "dealerInc" : "가온공인중개사무소",
        "dealerIncCEO" : "김관호",
        "dealer" : "김관호 소장(대표공인중개사)",
        "dealerIncDomicile" : "서울특별시 강남구 논현로85길 52 비111호",
        "registrationNumber" : "11680-2017-00241",
        "roomPhoto" : [
            "{require('../../images/R2/R2_1.png')}",
            "R2_2",
            "{require('../../images/R2/R2_3.png')}",
            "R2_4",
            "R2_5"
        ]
    }

],
  all: function() { return this.rooms},
  get: function(id) {
    const isRoom = p => p.id === id
    return this.rooms.find(isRoom)
  }
}

export default RoomAPI
