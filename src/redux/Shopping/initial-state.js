const INITIAL_STATE = {
    products:[
        {
        id:1,
        description:'bicicleta 2022',
        title:'mtb 29"',
        marca:'cannondale',
        price:10.0,
        catg:{id:'1', name:'mtb'},
        image:'https://live.staticflickr.com/65535/52565620425_5122aba64f_c.jpg'
    },
    {
        id:2,
        description:'bicicleta 2021',
        title:'mtb 27,5"',
        marca:'gw',
        price:20.0,
        catg:{id:'1',name:'mtb'},
        image:'https://live.staticflickr.com/65535/52565448854_5f84f88677_b.jpg'
    },
    {
        id:3,
        description:'bicicleta 2023',
        title:'mtb 26"',
        marca:'u-bike',
        price:20.0,
        catg:{id:'1', name:'mtb'},
        image:'https://live.staticflickr.com/65535/52594748776_1a4936b8fd_m.jpg'
    },
    {
        id:4,
        description:'bicicleta 2022',
        title:'bmx 20"',
        marca:'gw',
        price:20.0,
        catg:{id:'1',name:'bmx'},
        image:'https://live.staticflickr.com/65535/52564706867_d60180efca_c.jpg'
    },
    {
        id:5,
        description:'bicicleta 2021',
        title:'bmx 20"',
        marca:'mongoose',
        price:20.0,
        catg:{id:'1',name:'bmx'},
        image:'https://live.staticflickr.com/65535/52565697538_98606847fe_z.jpg'
    },
    {
        id:6,
        description:'par y posterior manzana casette',
        title:'rin 20"',
        marca:'gw',
        price:20.0,
        catg:{id:'2',name:'plano'},
        image:'https://live.staticflickr.com/65535/52593851291_04b9709f55_m.jpg'
    },
    {
        id:7,
        description:'par y posterior manzana rosca',
        title:'rin 24"',
        marca:'gw',
        price:20.0,
        catg:{id:'2',name:'plano'},
        image:'https://live.staticflickr.com/65535/52596325152_147223591a_m.jpg'
    },
    {
        id:8,
        description:'unidad trasero y manzana rosca',
        title:'rin 26"',
        marca:'gw',
        price:20.0,
        catg:{id:'2',name:'piramide'},
        image:'https://live.staticflickr.com/65535/52594370368_72ccc2f96e_m.jpg'
    },
    {
        id:9,
        description:'par y posterior manzana casette',
        title:'rin 27.5"',
        marca:'gw',
        price:20.0,
        catg:{id:'2',name:'piramide'},
        image:'https://live.staticflickr.com/65535/52593368677_1dfba99d77_n.jpg'
    },
    {
        id:10,
        description:'rin hojas de aluminio',
        title:' 29" x 50mm',
        marca:'Jones spec.',
        price:20.0,
        catg:{id:'2',name:'piramide'},
        image:'https://live.staticflickr.com/65535/52597075759_e1113e6a2e_m.jpg'
    },
    
    {
        id:11,
        description:'tenedor 20"',
        title:'suspension frontal',
        marca:'rock shock',
        price:20.0,
        catg:{id:'3',name:'forks'},
        image:'https://live.staticflickr.com/65535/52594275310_85b2575db5_n.jpg'
    },
    {
        id:12,
        description:'tenedor 27.5"',
        title:'rigido',
        marca:'cannondale',
        price:20.0,
        catg:{id:'3',name:'forks'},
        image:'https://live.staticflickr.com/65535/52593851201_d0560968f9_m.jpg'
    },
    {
        id:13,
        description:'tenedor 26"',
        title:'izquierdo',
        marca:'cannondale',
        price:20.0,
        catg:{id:'3',name:'forks'},
        image:'https://live.staticflickr.com/65535/52594370438_103aeb2cba_m.jpg'
    },
    {
        id:14,
        description:'tenedor 24"',
        title:'suspension frontal',
        marca:'fox',
        price:20.0,
        catg:{id:'3',name:'forks'},
        image:'https://live.staticflickr.com/65535/52597084824_6ce3f5d217_m.jpg'
    },
    {
        id:15,
        description:'tenedor 24"',
        title:'rigido',
        marca:'gw',
        price:20.0,
        catg:{id:'3',name:'forks'},
        image:'https://live.staticflickr.com/65535/52594370403_a058e6cb73_m.jpg'
    },
    {
        id:16,
        description:'espiga bmx',
        title:'soporte direccional',
        marca:'drive',
        price:20.0,
        catg:{id:'4',name:'handlebar'},
        image:'https://live.staticflickr.com/65535/52595204213_fe9b6f1a35_c.jpg'
    },
    {
        id:18,
        description:'espiga mtb oversize"',
        title:'soporte direccional',
        marca:'gw',
        price:20.0,
        catg:{id:'4',name:'handlebar'},
        image:'https://live.staticflickr.com/65535/52594683076_e8f9642368_n.jpg'
    },
    {
        id:19,
        description:'manubrio bmx"',
        title:'barra direccional',
        marca:'gw',
        price:20.0,
        catg:{id:'4',name:'handlebar'},
        image:'https://live.staticflickr.com/65535/52595107005_f777f644e0_h.jpg'
    },
    {
        id:20,
        description:'manubrio mtb"',
        title:'barra direccional',
        marca:'gw',
        price:20.0,
        catg:{id:'4',name:'handlebar'},
        image:'https://live.staticflickr.com/65535/52595204203_b7f597359e_m.jpg'
    },
    {
        id:21,
        description:'grupo xtr"',
        title:'10 velocidades',
        marca:'shimano',
        price:20.0,
        catg:{id:'5',name:'triplato'},
        image:'https://live.staticflickr.com/65535/52595136140_3be8260906_m.jpg'
    },
    {
        id:22,
        description:'grupo xtr"',
        title:'24 velocidades',
        marca:'shimano',
        price:20.0,
        catg:{id:'5',name:'sprockets'},
        image:'https://live.staticflickr.com/65535/52594972834_3e83581d16_m.jpg'
    },
    {
        id:23,
        description:'modelo 2021',
        title:'urban bike 26"',
        marca:'u-bike',
        price:20.0,
        catg:{id:'1',name:'urban'},
        image:'https://live.staticflickr.com/65535/50174208216_bc84fce781_c.jpg'
    },
    {
        id:24,
        description:'motor 36v (350W)',
        title:'e-bike 20"',
        marca:'OneBot',
        price:20.0,
        catg:{id:'1',name:'urban'},
        image:'https://live.staticflickr.com/65535/52595019869_d16b481f34_m.jpg'
    },
    {
        id:25,
        description:'accesorios',
        title:'carga trasera',
        marca:'gw',
        price:20.0,
        catg:{id:'6',name:'items'},
        image:'https://live.staticflickr.com/65535/52594778651_d1d75f5fbd_m.jpg'
    },
    {
        id:26,
        description:'parrilla trasera',
        title:'soporte carga',
        marca:'chino',
        price:20.0,
        catg:{id:'6',name:'items'},
        image:'https://live.staticflickr.com/65535/52594779351_97d3a887f3_m.jpg'
    },
    {
        id:27,
        description:'parrilla frontal',
        title:'soporte carga',
        marca:'chino',
        price:20.0,
        catg:{id:'6',name:'items'},
        image:'https://live.staticflickr.com/65535/52595312383_27632ef6c4_c.jpg'
    },
    {
        id:28,
        description:'accesorios',
        title:'casco',
        marca:'smith',
        price:20.0,
        catg:{id:'6',name:'items'},
        image:'https://live.staticflickr.com/65535/52596310547_d4a776715d_z.jpg'
    },
    {
        id:29,
        description:'frenos',
        title:'v-brake',
        marca:'logan',
        price:20.0,
        catg:{id:'6',name:'items'},
        image:'https://live.staticflickr.com/65535/52594321930_5af6deb63f_c.jpg'
    },
    {
        id:30,
        description:'frenos',
        title:'disco',
        marca:'shimano',
        price:20.0,
        catg:{id:'6',name:'items'},
        image:'https://live.staticflickr.com/65535/52593413477_bd2ec85cf0_z.jpg'
    },
    {
        id:31,
        description:'accesorios',
        title:'guantes',
        marca:'-',
        price:20.0,
        catg:{id:'6',name:'items'},
        image:'https://live.staticflickr.com/65535/52596799251_8df7b4aa80_z.jpg'
    },
    {
        id:32,
        description:'asiento',
        title:'galapago prostatico',
        marca:'gw',
        price:20.0,
        catg:{id:'6',name:'items'},
        image:'https://live.staticflickr.com/65535/52594265017_34d9454894_m.jpg'
    },
    {
        id:33,
        description:'asiento',
        title:'galapago amortiguado',
        marca:'gw',
        price:20.0,
        catg:{id:'6',name:'items'},
        image:'https://live.staticflickr.com/65535/52595009669_b0df5f9609_s.jpg'
    },
    {
        id:34,
        description:'accesorio',
        title:'carimañola aluminio',
        marca:'-',
        price:20.0,
        catg:{id:'6',name:'items'},
        image:'https://live.staticflickr.com/65535/52594783171_6ce584c1da_n.jpg'
    },
    {
        id:35,
        description:'accesorio',
        title:'porta carimañola',
        marca:'-',
        price:20.0,
        catg:{id:'6',name:'items'},
        image:'https://live.staticflickr.com/65535/52595308333_ba3f2f07cb_m.jpg'
    },
    {
        id:36,
        description:'grupo xtr',
        title:'cadena',
        marca:'shimano',
        price:20.0,
        catg:{id:'5',name:'items'},
        image:'https://live.staticflickr.com/65535/52595136175_28b882ffb7_m.jpg'
    },
    {
        id:37,
        description:'grupo xtr',
        title:'sprocket',
        marca:'shimano',
        price:20.0,
        catg:{id:'5',name:'items'},
        image:'https://live.staticflickr.com/65535/52594972904_d601dd7055_m.jpg'
    },
    {
        id:38,
        description:'grupo xtr',
        title:'tensor',
        marca:'shimano',
        price:20.0,
        catg:{id:'5',name:'items'},
        image:'https://live.staticflickr.com/65535/52595232543_9d41105f3b_m.jpg'
    },

    {
        id:39,
        description:'grupo xtr',
        title:'descarrilador',
        marca:'shimano',
        price:20.0,
        catg:{id:'5',name:'items'},
        image:'https://live.staticflickr.com/65535/52595136190_d2c3d03581_m.jpg'
    },
    {
        id:40,
        description:'grupo xtr',
        title:'palanca biela',
        marca:'shimano',
        price:20.0,
        catg:{id:'5',name:'items'},
        image:'https://live.staticflickr.com/65535/52594972864_737a30f9ea_m.jpg'
    },
    {
        id:41,
        description:'grupo xtr',
        title:'palanca sprocket',
        marca:'shimano',
        price:20.0,
        catg:{id:'5',name:'items'},
        image:'https://live.staticflickr.com/65535/52595136165_c7ddbcfaa9_m.jpg'
    },
    {
        id:42,
        description:'accesorios',
        title:'inflador',
        marca:'-',
        price:20.0,
        catg:{id:'6',name:'items'},
        image:'https://live.staticflickr.com/65535/52597322273_b8bd542ef6_m.jpg'
    },
    ],//{id, title, descr, img}
    filteredItems:[],
    cart:[],//{id, title, descr, price, img,qty}
    currentItem:null
}
export default INITIAL_STATE