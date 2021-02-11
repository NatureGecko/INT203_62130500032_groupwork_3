let followedBy = 447153;
let username = 'Kirah Haitaka';
let userquote = 'My favourite thing in this game is watching disaster break up their life in this game.';

const gallery = {
    data() {
        return {
            imagesdata: [{
                    imghref: 'images/img_user001_id001.png',
                    profilehref: 'images/profile_user001.png',
                    imgtitle: 'Damanlay district - The Layers',
                    imgdescription: 'ศูนย์การค้าแนวตั้งขนาดใหญ่บนพื้นที่ 1 หมื่นกว่าตารางเมตร',
                    likedhref: 'Like',
                    diaplayname: username,
                    isliked: false
                }, {
                    imghref: 'images/img_user001_id002.png',
                    profilehref: 'images/profile_user001.png',
                    imgtitle: 'Camping in The Nuke Thailand',
                    imgdescription: 'แม้ว่าจะเป็นมอดแพคที่ตอนกลางคืนเต็มไปด้วยซอมบี้และระเบิดเดินได้ แต่ผมก็ยังรักการเข้าค่ายกลางป่าในมอดแพคนี้นะ!',
                    likedhref: 'like',
                    diaplayname: username,
                    isliked: false
                }, {
                    imghref: 'images/img_user001_id003.png',
                    profilehref: 'images/profile_user001.png',
                    imgtitle: 'A little passenger',
                    imgdescription: 'ตัวนี้ไม่ได้อยู๋ที่บ้าน ตัวนี้อยู๋ที่มหาลัย',
                    likedhref: 'like',
                    diaplayname: username,
                    isliked: false
                }, {
                    imghref: 'images/img_user001_id004.png',
                    profilehref: 'images/profile_user001.png',
                    imgtitle: 'Face hugger',
                    imgdescription: '*------------*',
                    likedhref: 'like',
                    diaplayname: username,
                    isliked: false
                }, {
                    imghref: 'images/img_user001_id005.png',
                    profilehref: 'images/profile_user001.png',
                    imgtitle: 'Bedroom invader',
                    imgdescription: 'อย่าให้น้องได้ขึ้นเตียง เพราะคุณจะไม่ได้นอนบนนั้นอีกเลย ( น้องยึด )',
                    likedhref: 'like',
                    diaplayname: username,
                    isliked: false
                }, {
                    imghref: 'images/img_user001_id006.png',
                    profilehref: 'images/profile_user001.png',
                    imgtitle: 'Bung',
                    imgdescription: 'ระบาดตอนช่วงหน้าร้อน เดี๋ยวนี้ไม่มีให้เห็นแล้วล่ะ',
                    likedhref: 'like',
                    diaplayname: username,
                    isliked: false
                }

            ]
        }
    },
    methods: {
        likeThisPicture(pictureID) {
            this.imagesdata[pictureID].isliked = !isliked;
        }
    },
    computed: {
        coundlikeforeach(pictureID) {
            return 0; //Not implemented
        }
    }
}
Vue.createApp(gallery).mount('#gallery');

//Main gallery sector , a main display
const maingallerysector = {
    data() {
        return {
            profilehref: 'images/profile_user001.png',
            mainimghref: 'images/img_user001_maingallery.png',
            diaplayname: username,
            displayquote: userquote,
            displayfollowed: followedBy,
            followedbyyou: false
        }
    },
    methods: {
        addFollower() {
            followedBy++;
        },
        removeFollower() {
            followedBy--;
        },
        togglefollowedbyyou() {
            if (this.followedbyyou) {
                followedBy++;
            } else {
                followedBy--;
            }
            this.followedbyyou = !this.followedbyyou;
        }
    }
}
Vue.createApp(maingallerysector).mount('#maingallerysector');


const mainsectorheader = {
    data() {
        return {
            sectordisplayname: username
        }
    }
}
Vue.createApp(mainsectorheader).mount('#mainsectorheader');