console.log('script started...');

//hamburger menu
const hamBurger = document.querySelector(".toggle-btn");

hamBurger.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("expand");
});

// Photo data organized by category
const photoCategories = {
    'animaux': [
        {
            src: 'photos/Animaux/DSC00070A.JPG',
            description: ''
        },
        {
            src: 'photos/Animaux/DSC03314A.jpg',
            description: ''
        },
        {
            src: 'photos/Animaux/DSC03489A.JPG',
            description: ''
        },
        {
            src: 'photos/Animaux/DSC03683A.JPG',
            description: ''
        },
        {
            src: 'photos/Animaux/DSC0658A.JPG',
            description: ''
        },
        {
            src: 'photos/Animaux/DSC0658AA.JPG',
            description: ''
        },
        {
            src: 'photos/Animaux/DSC07060A.JPG',
            description: ''
        },
        {
            src: 'photos/Animaux/DSC07062B.JPG',
            description: ''
        },
        {
            src: 'photos/Animaux/DSC07447A.JPG',
            description: ''
        },
        {
            src: 'photos/Animaux/DSC09011A.JPG',
            description: ''
        },
        {
            src: 'photos/Animaux/DSC1284A.JPG',
            description: ''
        },
        {
            src: 'photos/Animaux/DSC1376A.JPG',
            description: ''
        },
        {
            src: 'photos/Animaux/DSC1544A.JPG',
            description: ''
        },
        {
            src: 'photos/Animaux/DSC1622A.JPG',
            description: ''
        },
        {
            src: 'photos/Animaux/DSC1700A.JPG',
            description: ''
        },
        {
            src: 'photos/Animaux/DSC1729A.JPG',
            description: ''
        }
    ],
    'autres_oiseaux': [
        {
            src: 'photos/Autres_oiseaux/DSC00996B.JPG',
            description: ''
        },
        {
            src: 'photos/Autres_oiseaux/DSC0185A.JPG',
            description: ''
        },
        {
            src: 'photos/Autres_oiseaux/DSC0185C.JPG',
            description: ''
        },
        {
            src: 'photos/Autres_oiseaux/DSC0194A.JPG',
            description: ''
        },
        {
            src: 'photos/Autres_oiseaux/DSC0195A.JPG',
            description: ''
        },
        {
            src: 'photos/Autres_oiseaux/TourterelleA.JPG',
            description: ''
        }
    ],
    'bruants': [
        {
            src: 'photos/Bruants/Bruant couronne blanche2_v3.JPG',
            description: ''
        },
        {
            src: 'photos/Bruants/Bruant couronne blanche_v3.JPG',
            description: ''
        },
        {
            src: 'photos/Bruants/bruant gorge blanche2B.JPG',
            description: ''
        },
        {
            src: 'photos/Bruants/DSC00035A.JPG',
            description: ''
        },
        {
            src: 'photos/Bruants/DSC00247A.JPG',
            description: ''
        },
        {
            src: 'photos/Bruants/DSC00256A.JPG',
            description: ''
        },
        {
            src: 'photos/Bruants/DSC00297A.JPG',
            description: ''
        },
        {
            src: 'photos/Bruants/DSC00304A.JPG',
            description: ''
        },
        {
            src: 'photos/Bruants/DSC00320A.JPG',
            description: ''
        },
        {
            src: 'photos/Bruants/DSC00353A.JPG',
            description: ''
        },
        {
            src: 'photos/Bruants/DSC00387A.JPG',
            description: ''
        },
        {
            src: 'photos/Bruants/DSC00464A.JPG',
            description: ''
        },
        {
            src: 'photos/Bruants/DSC00513A.JPG',
            description: ''
        },
        {
            src: 'photos/Bruants/DSC00517A.JPG',
            description: ''
        },
        {
            src: 'photos/Bruants/DSC00554A.JPG',
            description: ''
        },
        {
            src: 'photos/Bruants/DSC00563A.JPG',
            description: ''
        },
        {
            src: 'photos/Bruants/DSC01030B.JPG',
            description: ''
        },
        {
            src: 'photos/Bruants/DSC01070A.JPG',
            description: ''
        },
        {
            src: 'photos/Bruants/DSC01829A.JPG',
            description: ''
        },
        {
            src: 'photos/Bruants/DSC02062A.JPG',
            description: ''
        },
        {
            src: 'photos/Bruants/DSC02087A.JPG',
            description: ''
        },
        {
            src: 'photos/Bruants/DSC02856A.JPG',
            description: ''
        },
        {
            src: 'photos/Bruants/DSC02924B.JPG',
            description: ''
        },
        {
            src: 'photos/Bruants/DSC03005A.JPG',
            description: ''
        },
        {
            src: 'photos/Bruants/DSC03038A.JPG',
            description: ''
        },
        {
            src: 'photos/Bruants/DSC03123A.JPG',
            description: ''
        },
        {
            src: 'photos/Bruants/DSC03166C.JPG',
            description: ''
        },
        {
            src: 'photos/Bruants/DSC03784B.JPG',
            description: ''
        },
        {
            src: 'photos/Bruants/DSC03795A.JPG',
            description: ''
        },
        {
            src: 'photos/Bruants/DSC03950B.JPG',
            description: ''
        },
        {
            src: 'photos/Bruants/Junco_v4.JPG',
            description: ''
        }
    ],
    'echassiers': [
        {
            src: 'photos/Echassiers/DSC00980A.jpg',
            description: ''
        },
        {
            src: 'photos/Echassiers/DSC00989B.jpg',
            description: ''
        },
        {
            src: 'photos/Echassiers/DSC0164A.JPG',
            description: ''
        },
        {
            src: 'photos/Echassiers/DSC0183A.JPG',
            description: ''
        },
        {
            src: 'photos/Echassiers/DSC0202A.JPG',
            description: ''
        },
        {
            src: 'photos/Echassiers/DSC0246A.JPG',
            description: ''
        },
        {
            src: 'photos/Echassiers/DSC04074A.jpg',
            description: ''
        },
        {
            src: 'photos/Echassiers/DSC04125A.jpg',
            description: ''
        },
        {
            src: 'photos/Echassiers/DSC04129A.jpg',
            description: ''
        },
        {
            src: 'photos/Echassiers/DSC0505A.JPG',
            description: ''
        },
        {
            src: 'photos/Echassiers/DSC0518A.JPG',
            description: ''
        },
        {
            src: 'photos/Echassiers/DSC0524A.JPG',
            description: ''
        },
        {
            src: 'photos/Echassiers/DSC0530A.JPG',
            description: ''
        },
        {
            src: 'photos/Echassiers/DSC0552A.JPG',
            description: ''
        },
        {
            src: 'photos/Echassiers/DSC05765B.JPG',
            description: ''
        },
        {
            src: 'photos/Echassiers/DSC0614A.JPG',
            description: ''
        },
        {
            src: 'photos/Echassiers/DSC06304B.JPG',
            description: ''
        },
        {
            src: 'photos/Echassiers/DSC06636B.JPG',
            description: ''
        },
        {
            src: 'photos/Echassiers/DSC06644A.JPG',
            description: ''
        },
        {
            src: 'photos/Echassiers/DSC06708A.JPG',
            description: ''
        },
        {
            src: 'photos/Echassiers/DSC06937A.JPG',
            description: ''
        },
        {
            src: 'photos/Echassiers/DSC06948A.JPG',
            description: ''
        },
        {
            src: 'photos/Echassiers/DSC06956A.JPG',
            description: ''
        },
        {
            src: 'photos/Echassiers/DSC06970A.JPG',
            description: ''
        },
        {
            src: 'photos/Echassiers/DSC07013A.JPG',
            description: ''
        },
        {
            src: 'photos/Echassiers/DSC07040A.JPG',
            description: ''
        },
        {
            src: 'photos/Echassiers/DSC07069A.JPG',
            description: ''
        },
        {
            src: 'photos/Echassiers/DSC07118A.JPG',
            description: ''
        },
        {
            src: 'photos/Echassiers/DSC07124B.JPG',
            description: ''
        },
        {
            src: 'photos/Echassiers/DSC07176C.JPG',
            description: ''
        },
        {
            src: 'photos/Echassiers/DSC07199A.JPG',
            description: ''
        },
        {
            src: 'photos/Echassiers/DSC07263A.JPG',
            description: ''
        },
        {
            src: 'photos/Echassiers/DSC07331A.JPG',
            description: ''
        },
        {
            src: 'photos/Echassiers/DSC07334A.JPG',
            description: ''
        },
        {
            src: 'photos/Echassiers/DSC07432A.JPG',
            description: ''
        },
        {
            src: 'photos/Echassiers/DSC07433A.JPG',
            description: ''
        },
        {
            src: 'photos/Echassiers/DSC07440A.JPG',
            description: ''
        },
        {
            src: 'photos/Echassiers/DSC07448A.JPG',
            description: ''
        },
        {
            src: 'photos/Echassiers/DSC07502A.JPG',
            description: ''
        },
        {
            src: 'photos/Echassiers/DSC07579A.JPG',
            description: ''
        },
        {
            src: 'photos/Echassiers/DSC07610A.JPG',
            description: ''
        },
        {
            src: 'photos/Echassiers/DSC07643A.JPG',
            description: ''
        },
        {
            src: 'photos/Echassiers/DSC07651A.JPG',
            description: ''
        },
        {
            src: 'photos/Echassiers/DSC07693B.JPG',
            description: ''
        },
        {
            src: 'photos/Echassiers/DSC07694A.JPG',
            description: ''
        },
        {
            src: 'photos/Echassiers/DSC07798A.JPG',
            description: ''
        },
        {
            src: 'photos/Echassiers/DSC07837A.JPG',
            description: ''
        },
        {
            src: 'photos/Echassiers/DSC07970C.JPG',
            description: ''
        },
        {
            src: 'photos/Echassiers/DSC08100B.JPG',
            description: ''
        },
        {
            src: 'photos/Echassiers/DSC08140C.JPG',
            description: ''
        },
        {
            src: 'photos/Echassiers/DSC08192A.JPG',
            description: ''
        },
        {
            src: 'photos/Echassiers/DSC08226A.JPG',
            description: ''
        },
        {
            src: 'photos/Echassiers/DSC08233A.JPG',
            description: ''
        },
        {
            src: 'photos/Echassiers/DSC08293B.JPG',
            description: ''
        },
        {
            src: 'photos/Echassiers/DSC08381A.JPG',
            description: ''
        },
        {
            src: 'photos/Echassiers/DSC1671B.JPG',
            description: ''
        },
        {
            src: 'photos/Echassiers/DSC2630A.JPG',
            description: ''
        },
        {
            src: 'photos/Echassiers/DSC2635A.JPG',
            description: ''
        },
        {
            src: 'photos/Echassiers/DSC3298A.JPG',
            description: ''
        },
        {
            src: 'photos/Echassiers/DSC3321A.JPG',
            description: ''
        },
        {
            src: 'photos/Echassiers/heron vert_v3.JPG',
            description: ''
        }
    ],
    'oiseaux_aquatiques': [
        {
            src: 'photos/Oiseaux_aquatiques/Chipeau_v3.JPG',
            description: ''
        },
        {
            src: 'photos/Oiseaux_aquatiques/DSC00133A.JPG',
            description: ''
        },
        {
            src: 'photos/Oiseaux_aquatiques/DSC00155.JPG',
            description: ''
        },
        {
            src: 'photos/Oiseaux_aquatiques/DSC00155A.JPG',
            description: ''
        },
        {
            src: 'photos/Oiseaux_aquatiques/DSC00255A.JPG',
            description: ''
        },
        {
            src: 'photos/Oiseaux_aquatiques/DSC02310A.JPG',
            description: ''
        },
        {
            src: 'photos/Oiseaux_aquatiques/DSC03517B.JPG',
            description: ''
        },
        {
            src: 'photos/Oiseaux_aquatiques/DSC03532A.JPG',
            description: ''
        },
        {
            src: 'photos/Oiseaux_aquatiques/DSC03569B.JPG',
            description: ''
        },
        {
            src: 'photos/Oiseaux_aquatiques/DSC03599A.JPG',
            description: ''
        },
        {
            src: 'photos/Oiseaux_aquatiques/DSC0383.JPG',
            description: ''
        },
        {
            src: 'photos/Oiseaux_aquatiques/DSC0426A.JPG',
            description: ''
        },
        {
            src: 'photos/Oiseaux_aquatiques/DSC0537A.JPG',
            description: ''
        },
        {
            src: 'photos/Oiseaux_aquatiques/DSC05826C.JPG',
            description: ''
        },
        {
            src: 'photos/Oiseaux_aquatiques/DSC05845C.JPG',
            description: ''
        },
        {
            src: 'photos/Oiseaux_aquatiques/DSC06455A.JPG',
            description: ''
        },
        {
            src: 'photos/Oiseaux_aquatiques/DSC06772B.JPG',
            description: ''
        },
        {
            src: 'photos/Oiseaux_aquatiques/DSC06911C.JPG',
            description: ''
        },
        {
            src: 'photos/Oiseaux_aquatiques/DSC06999B.JPG',
            description: ''
        },
        {
            src: 'photos/Oiseaux_aquatiques/DSC07028B.JPG',
            description: ''
        },
        {
            src: 'photos/Oiseaux_aquatiques/DSC07053D.JPG',
            description: ''
        },
        {
            src: 'photos/Oiseaux_aquatiques/DSC07192D.JPG',
            description: ''
        },
        {
            src: 'photos/Oiseaux_aquatiques/DSC07206BC.JPG',
            description: ''
        },
        {
            src: 'photos/Oiseaux_aquatiques/DSC07206C.JPG',
            description: ''
        },
        {
            src: 'photos/Oiseaux_aquatiques/DSC07237B.JPG',
            description: ''
        },
        {
            src: 'photos/Oiseaux_aquatiques/DSC07243C.JPG',
            description: ''
        },
        {
            src: 'photos/Oiseaux_aquatiques/DSC07852C.JPG',
            description: ''
        },
        {
            src: 'photos/Oiseaux_aquatiques/DSC08031A.JPG',
            description: ''
        },
        {
            src: 'photos/Oiseaux_aquatiques/DSC08115C.JPG',
            description: ''
        },
        {
            src: 'photos/Oiseaux_aquatiques/DSC08146C.JPG',
            description: ''
        },
        {
            src: 'photos/Oiseaux_aquatiques/DSC08789B.JPG',
            description: ''
        },
        {
            src: 'photos/Oiseaux_aquatiques/DSC1399A.JPG',
            description: ''
        },
        {
            src: 'photos/Oiseaux_aquatiques/DSC1400A.JPG',
            description: ''
        },
        {
            src: 'photos/Oiseaux_aquatiques/DSC1407A.JPG',
            description: ''
        },
        {
            src: 'photos/Oiseaux_aquatiques/DSC1431A.JPG',
            description: ''
        },
        {
            src: 'photos/Oiseaux_aquatiques/DSC1431B.JPG',
            description: ''
        },
        {
            src: 'photos/Oiseaux_aquatiques/DSC1432A.JPG',
            description: ''
        },
        {
            src: 'photos/Oiseaux_aquatiques/DSC1598A.JPG',
            description: ''
        },
        {
            src: 'photos/Oiseaux_aquatiques/DSC1599A.JPG',
            description: ''
        },
        {
            src: 'photos/Oiseaux_aquatiques/DSC1602A.JPG',
            description: ''
        }
    ],
    'oiseaux_de_proies': [
        {
            src: 'photos/Oiseaux_de_proies/DSC00038A.JPG',
            description: ''
        },
        {
            src: 'photos/Oiseaux_de_proies/DSC00040A.JPG',
            description: ''
        },
        {
            src: 'photos/Oiseaux_de_proies/DSC00044A.JPG',
            description: ''
        },
        {
            src: 'photos/Oiseaux_de_proies/DSC00077A.JPG',
            description: ''
        },
        {
            src: 'photos/Oiseaux_de_proies/DSC00087A.JPG',
            description: ''
        },
        {
            src: 'photos/Oiseaux_de_proies/DSC00129A.JPG',
            description: ''
        },
        {
            src: 'photos/Oiseaux_de_proies/DSC00165B.JPG',
            description: ''
        },
        {
            src: 'photos/Oiseaux_de_proies/DSC00301A.JPG',
            description: ''
        },
        {
            src: 'photos/Oiseaux_de_proies/DSC00402A.JPG',
            description: ''
        },
        {
            src: 'photos/Oiseaux_de_proies/DSC00467A.JPG',
            description: ''
        },
        {
            src: 'photos/Oiseaux_de_proies/DSC00665A.JPG',
            description: ''
        },
        {
            src: 'photos/Oiseaux_de_proies/DSC00778B.JPG',
            description: ''
        },
        {
            src: 'photos/Oiseaux_de_proies/DSC00841A.JPG',
            description: ''
        },
        {
            src: 'photos/Oiseaux_de_proies/DSC00884B.JPG',
            description: ''
        },
        {
            src: 'photos/Oiseaux_de_proies/DSC00920A.JPG',
            description: ''
        },
        {
            src: 'photos/Oiseaux_de_proies/DSC01358A.JPG',
            description: ''
        },
        {
            src: 'photos/Oiseaux_de_proies/DSC01484A.JPG',
            description: ''
        },
        {
            src: 'photos/Oiseaux_de_proies/DSC0236A.JPG',
            description: ''
        },
        {
            src: 'photos/Oiseaux_de_proies/DSC0241A.JPG',
            description: ''
        },
        {
            src: 'photos/Oiseaux_de_proies/DSC0358B.JPG',
            description: ''
        },
        {
            src: 'photos/Oiseaux_de_proies/DSC03674A.JPG',
            description: ''
        },
        {
            src: 'photos/Oiseaux_de_proies/DSC03674B.JPG',
            description: ''
        },
        {
            src: 'photos/Oiseaux_de_proies/DSC0393A.JPG',
            description: ''
        },
        {
            src: 'photos/Oiseaux_de_proies/DSC0437A.JPG',
            description: ''
        },
        {
            src: 'photos/Oiseaux_de_proies/DSC0451A.JPG',
            description: ''
        },
        {
            src: 'photos/Oiseaux_de_proies/DSC06159B.JPG',
            description: ''
        },
        {
            src: 'photos/Oiseaux_de_proies/DSC06389B.JPG',
            description: ''
        },
        {
            src: 'photos/Oiseaux_de_proies/DSC0800A.JPG',
            description: ''
        },
        {
            src: 'photos/Oiseaux_de_proies/DSC08680B.JPG',
            description: ''
        },
        {
            src: 'photos/Oiseaux_de_proies/DSC08703C.JPG',
            description: ''
        },
        {
            src: 'photos/Oiseaux_de_proies/DSC09581B.JPG',
            description: ''
        },
        {
            src: 'photos/Oiseaux_de_proies/DSC1026A.JPG',
            description: ''
        },
        {
            src: 'photos/Oiseaux_de_proies/DSC1427A.JPG',
            description: ''
        },
        {
            src: 'photos/Oiseaux_de_proies/DSC1565A.JPG',
            description: ''
        },
        {
            src: 'photos/Oiseaux_de_proies/DSC2810A.JPG',
            description: ''
        }
    ],
    'parulines': [
        {
            src: 'photos/Parulines/DSC01775A.jpg',
            description: ''
        },
        {
            src: 'photos/Parulines/DSC01999A.jpg',
            description: ''
        },
        {
            src: 'photos/Parulines/DSC02005A.jpg',
            description: ''
        },
        {
            src: 'photos/Parulines/DSC02501A.jpg',
            description: ''
        },
        {
            src: 'photos/Parulines/DSC02510A.jpg',
            description: ''
        },
        {
            src: 'photos/Parulines/DSC02959A.jpg',
            description: ''
        },
        {
            src: 'photos/Parulines/DSC03178A.jpg',
            description: ''
        },
        {
            src: 'photos/Parulines/DSC03247A.jpg',
            description: ''
        },
        {
            src: 'photos/Parulines/DSC03256A.jpg',
            description: ''
        },
        {
            src: 'photos/Parulines/DSC03414B.JPG',
            description: ''
        },
        {
            src: 'photos/Parulines/DSC03461B.jpg',
            description: ''
        },
        {
            src: 'photos/Parulines/DSC03544A.jpg',
            description: ''
        },
        {
            src: 'photos/Parulines/DSC03553A.jpg',
            description: ''
        },
        {
            src: 'photos/Parulines/DSC03562A.jpg',
            description: ''
        },
        {
            src: 'photos/Parulines/DSC03574A.jpg',
            description: ''
        },
        {
            src: 'photos/Parulines/DSC03589B.jpg',
            description: ''
        },
        {
            src: 'photos/Parulines/DSC0617A.JPG',
            description: ''
        },
        {
            src: 'photos/Parulines/DSC0632A.JPG',
            description: ''
        },
        {
            src: 'photos/Parulines/DSC06615D.JPG',
            description: ''
        },
        {
            src: 'photos/Parulines/DSC0663A.JPG',
            description: ''
        },
        {
            src: 'photos/Parulines/DSC0666A.JPG',
            description: ''
        },
        {
            src: 'photos/Parulines/DSC0731B.JPG',
            description: ''
        },
        {
            src: 'photos/Parulines/DSC08403B.JPG',
            description: ''
        },
        {
            src: 'photos/Parulines/DSC09494B.JPG',
            description: ''
        },
        {
            src: 'photos/Parulines/DSC09521B.JPG',
            description: ''
        },
        {
            src: 'photos/Parulines/DSC09525B.JPG',
            description: ''
        },
        {
            src: 'photos/Parulines/DSC1628A.JPG',
            description: ''
        },
        {
            src: 'photos/Parulines/DSC1637A.JPG',
            description: ''
        },
        {
            src: 'photos/Parulines/DSC1791A.JPG',
            description: ''
        },
        {
            src: 'photos/Parulines/DSC1845A.JPG',
            description: ''
        },
        {
            src: 'photos/Parulines/DSC1881A.JPG',
            description: ''
        },
        {
            src: 'photos/Parulines/DSC2020A.JPG',
            description: ''
        },
        {
            src: 'photos/Parulines/DSC2040A.JPG',
            description: ''
        },
        {
            src: 'photos/Parulines/DSC2445A.JPG',
            description: ''
        },
        {
            src: 'photos/Parulines/DSC2478A.JPG',
            description: ''
        },
        {
            src: 'photos/Parulines/DSC2481A.JPG',
            description: ''
        },
        {
            src: 'photos/Parulines/Paruline orangée_v2.JPG',
            description: ''
        }
    ],
    'passereaux': [
        {
            src: 'photos/Passereaux/Cardinal2_v3.JPG',
            description: ''
        },
        {
            src: 'photos/Passereaux/DSC00003A.JPG',
            description: ''
        },
        {
            src: 'photos/Passereaux/DSC00075A.JPG',
            description: ''
        },
        {
            src: 'photos/Passereaux/DSC00099A.JPG',
            description: ''
        },
        {
            src: 'photos/Passereaux/DSC00234A.JPG',
            description: ''
        },
        {
            src: 'photos/Passereaux/DSC00291A.JPG',
            description: ''
        },
        {
            src: 'photos/Passereaux/DSC00300A.JPG',
            description: ''
        },
        {
            src: 'photos/Passereaux/DSC00322A.JPG',
            description: ''
        },
        {
            src: 'photos/Passereaux/DSC00322AA.JPG',
            description: ''
        },
        {
            src: 'photos/Passereaux/DSC00351A.JPG',
            description: ''
        },
        {
            src: 'photos/Passereaux/DSC00454E.JPG',
            description: ''
        },
        {
            src: 'photos/Passereaux/DSC00460A.JPG',
            description: ''
        },
        {
            src: 'photos/Passereaux/DSC00479B.JPG',
            description: ''
        },
        {
            src: 'photos/Passereaux/DSC00570A.JPG',
            description: ''
        },
        {
            src: 'photos/Passereaux/DSC00605B.JPG',
            description: ''
        },
        {
            src: 'photos/Passereaux/DSC00616C.JPG',
            description: ''
        },
        {
            src: 'photos/Passereaux/DSC00648B.JPG',
            description: ''
        },
        {
            src: 'photos/Passereaux/DSC00729A.JPG',
            description: ''
        },
        {
            src: 'photos/Passereaux/DSC0072A.JPG',
            description: ''
        },
        {
            src: 'photos/Passereaux/DSC00776D.JPG',
            description: ''
        },
        {
            src: 'photos/Passereaux/DSC00795A.JPG',
            description: ''
        },
        {
            src: 'photos/Passereaux/DSC00796B.JPG',
            description: ''
        },
        {
            src: 'photos/Passereaux/DSC00860B.JPG',
            description: ''
        },
        {
            src: 'photos/Passereaux/DSC00936A.JPG',
            description: ''
        },
        {
            src: 'photos/Passereaux/DSC00957A.JPG',
            description: ''
        },
        {
            src: 'photos/Passereaux/DSC01231B.JPG',
            description: ''
        },
        {
            src: 'photos/Passereaux/DSC01339B.JPG',
            description: ''
        },
        {
            src: 'photos/Passereaux/DSC01641A.JPG',
            description: ''
        },
        {
            src: 'photos/Passereaux/DSC0178A.JPG',
            description: ''
        },
        {
            src: 'photos/Passereaux/DSC0178AA.JPG',
            description: ''
        },
        {
            src: 'photos/Passereaux/DSC01948C.JPG',
            description: ''
        },
        {
            src: 'photos/Passereaux/DSC02210A.JPG',
            description: ''
        },
        {
            src: 'photos/Passereaux/DSC02464A.JPG',
            description: ''
        },
        {
            src: 'photos/Passereaux/DSC0251A.JPG',
            description: ''
        },
        {
            src: 'photos/Passereaux/DSC0251AA.JPG',
            description: ''
        },
        {
            src: 'photos/Passereaux/DSC02589A.JPG',
            description: ''
        },
        {
            src: 'photos/Passereaux/DSC02689B.JPG',
            description: ''
        },
        {
            src: 'photos/Passereaux/DSC0294A.JPG',
            description: ''
        },
        {
            src: 'photos/Passereaux/DSC0303A.JPG',
            description: ''
        },
        {
            src: 'photos/Passereaux/DSC03477B.JPG',
            description: ''
        },
        {
            src: 'photos/Passereaux/DSC03498B.JPG',
            description: ''
        },
        {
            src: 'photos/Passereaux/DSC0351A.JPG',
            description: ''
        },
        {
            src: 'photos/Passereaux/DSC0351AA.JPG',
            description: ''
        },
        {
            src: 'photos/Passereaux/DSC0394A.JPG',
            description: ''
        },
        {
            src: 'photos/Passereaux/DSC0394AA.JPG',
            description: ''
        },
        {
            src: 'photos/Passereaux/DSC0410A.JPG',
            description: ''
        },
        {
            src: 'photos/Passereaux/DSC0410AA.JPG',
            description: ''
        },
        {
            src: 'photos/Passereaux/DSC04154A.JPG',
            description: ''
        },
        {
            src: 'photos/Passereaux/DSC04186E.JPG',
            description: ''
        },
        {
            src: 'photos/Passereaux/DSC04196B.JPG',
            description: ''
        },
        {
            src: 'photos/Passereaux/DSC04224C.JPG',
            description: ''
        },
        {
            src: 'photos/Passereaux/DSC04253D.JPG',
            description: ''
        },
        {
            src: 'photos/Passereaux/DSC04285B.JPG',
            description: ''
        },
        {
            src: 'photos/Passereaux/DSC0438A.JPG',
            description: ''
        },
        {
            src: 'photos/Passereaux/DSC04588B.JPG',
            description: ''
        },
        {
            src: 'photos/Passereaux/DSC04835B.JPG',
            description: ''
        },
        {
            src: 'photos/Passereaux/DSC04841B.JPG',
            description: ''
        },
        {
            src: 'photos/Passereaux/DSC05448C.JPG',
            description: ''
        },
        {
            src: 'photos/Passereaux/DSC05465D.JPG',
            description: ''
        },
        {
            src: 'photos/Passereaux/DSC05523B.JPG',
            description: ''
        },
        {
            src: 'photos/Passereaux/DSC06672C.JPG',
            description: ''
        },
        {
            src: 'photos/Passereaux/DSC0762A.JPG',
            description: ''
        },
        {
            src: 'photos/Passereaux/DSC07743A.JPG',
            description: ''
        },
        {
            src: 'photos/Passereaux/DSC07751B.JPG',
            description: ''
        },
        {
            src: 'photos/Passereaux/DSC07792C.JPG',
            description: ''
        },
        {
            src: 'photos/Passereaux/DSC1634A.JPG',
            description: ''
        },
        {
            src: 'photos/Passereaux/DSC1812A.JPG',
            description: ''
        },
        {
            src: 'photos/Passereaux/DSC2154A.JPG',
            description: ''
        },
        {
            src: 'photos/Passereaux/DSC2855A.JPG',
            description: ''
        },
        {
            src: 'photos/Passereaux/DSC2886A.JPG',
            description: ''
        },
        {
            src: 'photos/Passereaux/DSC2894A.JPG',
            description: ''
        },
        {
            src: 'photos/Passereaux/DSC3469A.JPG',
            description: ''
        },
        {
            src: 'photos/Passereaux/DSC3662A.JPG',
            description: ''
        },
        {
            src: 'photos/Passereaux/hirondelle_v2.JPG',
            description: ''
        }
    ],
    'pics': [
        {
            src: 'photos/Pics/DSC00058B.JPG',
            description: ''
        },
        {
            src: 'photos/Pics/DSC00255A.JPG',
            description: ''
        },
        {
            src: 'photos/Pics/DSC00290A.JPG',
            description: ''
        },
        {
            src: 'photos/Pics/DSC00309A.JPG',
            description: ''
        },
        {
            src: 'photos/Pics/DSC00320A.JPG',
            description: ''
        },
        {
            src: 'photos/Pics/DSC00344A.JPG',
            description: ''
        },
        {
            src: 'photos/Pics/DSC00516A.JPG',
            description: ''
        },
        {
            src: 'photos/Pics/DSC00549A.JPG',
            description: ''
        },
        {
            src: 'photos/Pics/DSC01170A.JPG',
            description: ''
        },
        {
            src: 'photos/Pics/DSC02962A.JPG',
            description: ''
        },
        {
            src: 'photos/Pics/DSC03256B.JPG',
            description: ''
        },
        {
            src: 'photos/Pics/DSC03284B.JPG',
            description: ''
        },
        {
            src: 'photos/Pics/DSC04417A.JPG',
            description: ''
        },
        {
            src: 'photos/Pics/DSC04988A.JPG',
            description: ''
        },
        {
            src: 'photos/Pics/DSC05151A.JPG',
            description: ''
        },
        {
            src: 'photos/Pics/DSC05161A.JPG',
            description: ''
        },
        {
            src: 'photos/Pics/DSC05197A.JPG',
            description: ''
        },
        {
            src: 'photos/Pics/DSC05349A.JPG',
            description: ''
        },
        {
            src: 'photos/Pics/DSC05603B.JPG',
            description: ''
        },
        {
            src: 'photos/Pics/DSC0961A.JPG',
            description: ''
        },
        {
            src: 'photos/Pics/DSC1838B.JPG',
            description: ''
        },
        {
            src: 'photos/Pics/DSC3822B.JPG',
            description: ''
        }
    ]
};

let currentCategory = '';
let currentImageIndex = 0;

function openLightbox(imageIndex, category) {
    console.log('Opening lightbox - Index:', imageIndex, 'Category:', category);
    
    currentCategory = category;
    currentImageIndex = imageIndex;
    
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const description = document.getElementById('description');
    
    const photos = photoCategories[category];
    console.log('Photos array:', photos);
    console.log('Selected photo:', photos ? photos[imageIndex] : 'undefined');
    
    if (!photos || !photos[imageIndex]) {
        console.error('Photo not found for index:', imageIndex, 'in category:', category);
        return;
    }
    
    const photoSrc = photos[imageIndex].src;
    console.log('Setting image src to:', photoSrc);
    
    lightboxImage.src = photoSrc;
    if (description) {
        description.textContent = photos[imageIndex].description;
    }
    
    lightbox.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// FIXED: Function name changed from changeSlide to changeImage to match your HTML
function changeImage(direction) {
    const photos = photoCategories[currentCategory];
    const totalPhotos = photos.length;
    
    currentImageIndex += direction;
    
    // Handle wrapping around
    if (currentImageIndex >= totalPhotos) {
        currentImageIndex = 0;
    } else if (currentImageIndex < 0) {
        currentImageIndex = totalPhotos - 1;
    }
    
    const lightboxImage = document.getElementById('lightbox-image');
    const description = document.getElementById('description');
    
    lightboxImage.src = photos[currentImageIndex].src;
    if (description) {
        description.textContent = photos[currentImageIndex].description;
    }
}

// Keyboard navigation
document.addEventListener('keydown', function(event) {
    const lightbox = document.getElementById('lightbox');
    if (lightbox.style.display === 'block') {
        switch(event.key) {
            case 'Escape':
                closeLightbox();
                break;
            case 'ArrowLeft':
                changeImage(-1);
                break;
            case 'ArrowRight':
                changeImage(1);
                break;
        }
    }
});

// Close lightbox when clicking outside the image
document.addEventListener('DOMContentLoaded', function() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.addEventListener('click', function(event) {
            if (event.target === this) {
                closeLightbox();
            }
        });
    }
});