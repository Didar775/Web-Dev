export interface Product {
  id: number;
  name: string;
  description:string;
  price: string;
  link: string;
  image:{
    f:string;
    s:string;
    th:string;
    ft:string;
  };
}

export const products = [
  
    {
        id: 1,
        name:"Apple MacBook Air 13 MGN63",
        description:"серый",
        price:"480 550 ₸",
        link:"https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAl9efBhAkEiwA4ToripR8RmO9dRcnyhCe8gDKXyQawh07bkkPy5RljGaB3Af50gm5NWZ5LBoCudwQAvD_BwE",
        image:{
        f:"https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h67/h95/33125682380830/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1-Container.jpg",
          s:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h06/hbb/52177862557726/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-2-Container.jpg",
          th:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha7/h9f/50489392365598/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-3-Container.jpg",
          ft:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2f/h97/50489392824350/apple-macbook-air-13-mgn63-seryj-100797845-4.jpg"
    }

    },

    {
        id:2,
        name:"Apple MacBook Air 13 MGN93",
        description:"серебристый",
        price:"499 188 ₸",
        link:"https://kaspi.kz/shop/p/apple-macbook-air-13-mgn93-serebristyi-100798912/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAl9efBhAkEiwA4ToripR8RmO9dRcnyhCe8gDKXyQawh07bkkPy5RljGaB3Af50gm5NWZ5LBoCudwQAvD_BwE",
        image:
        {
        f:"https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h52/haf/33271768514590/apple-macbook-air-2020-13-3-mgn93-serebristyj-100798912-1-Container.jpg",
        s:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8a/hf2/49803337465886/apple-macbook-air-2020-13-3-mgn93-serebristyj-100798912-2-Container.jpg",
        th:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc4/h44/49803337695262/apple-macbook-air-2020-13-3-mgn93-serebristyj-100798912-3-Container.jpg",
        ft:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h11/h27/49803337924638/apple-macbook-air-2020-13-3-mgn93-serebristyj-100798912-4-Container.jpg"
    
        }
    } 
    ,

    {
        

        id:3,
        name:"Apple MacBook Air 13 MGND3",
        description:"золотистый",
        price:"498 000 ₸", 
        link:"https://kaspi.kz/shop/p/apple-macbook-air-13-mgnd3-zolotistyi-100797576/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAl9efBhAkEiwA4ToripR8RmO9dRcnyhCe8gDKXyQawh07bkkPy5RljGaB3Af50gm5NWZ5LBoCudwQAvD_BwE",
        image:{
            f:"https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h33/hae/33286636470302/apple-macbook-air-2020-13-3-mgnd3-zolotistyj-100797576-1-Container.jpg",
            s:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd5/h5c/51914181050398/apple-macbook-air-2020-13-3-mgnd3-zolotistyj-100797576-2-Container.jpg",
            th:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2f/h93/51914181279774/apple-macbook-air-2020-13-3-mgnd3-zolotistyj-100797576-3-Container.jpg",
            ft:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbb/h88/51914181509150/apple-macbook-air-13-mgnd3-zolotistyj-100797576-4.jpg"

        }

    },

    {
        id:4,
        name:"Apple MacBook Air 13 MLY33",
        description:"черный",
        price:"628 250 ₸",
        link:"https://kaspi.kz/shop/p/apple-macbook-air-13-mly33-chernyi-105933768/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAl9efBhAkEiwA4ToripR8RmO9dRcnyhCe8gDKXyQawh07bkkPy5RljGaB3Af50gm5NWZ5LBoCudwQAvD_BwE",
        image:
        {f: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h1f/h2b/52679174291486/apple-macbook-air-13-mly33-chernyi-105933768-1.jpg",
         s:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hde/h3b/52679191789598/noutbuk-apple-macbook-air-m2-8-cpu-8-gpu-256gb-space-gray-105933794-2.jpg",
         th:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h53/h46/52679192018974/noutbuk-apple-macbook-air-m2-8-cpu-8-gpu-256gb-space-gray-105933794-3.jpg",
         ft:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hfa/hf0/52679192248350/noutbuk-apple-macbook-air-m2-8-cpu-8-gpu-256gb-space-gray-105933794-4.jpg"
    }
    },
    {
        id:5,
        name:"Apple MacBook Air 13 MLXW3",
        description:"серый",
        price:"629 978 ₸",
        link:"https://kaspi.kz/shop/p/apple-macbook-air-13-mlxw3-seryi-105933794/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAl9efBhAkEiwA4ToripR8RmO9dRcnyhCe8gDKXyQawh07bkkPy5RljGaB3Af50gm5NWZ5LBoCudwQAvD_BwE",
        image:
        {
            f:"https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h40/h86/52679187759134/noutbuk-apple-macbook-air-m2-8-cpu-8-gpu-256gb-space-gray-105933794-1.jpg",
            s:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hde/h3b/52679191789598/noutbuk-apple-macbook-air-m2-8-cpu-8-gpu-256gb-space-gray-105933794-2.jpg",
            th:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h53/h46/52679192018974/noutbuk-apple-macbook-air-m2-8-cpu-8-gpu-256gb-space-gray-105933794-3.jpg",
            ft:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hfa/hf0/52679192248350/noutbuk-apple-macbook-air-m2-8-cpu-8-gpu-256gb-space-gray-105933794-4.jpg"        
    }
    },
    {
        id:6,
       name:"Apple MacBook Air 13 MLY13",
       description:"золотистый",
        price:"637 655 ₸",
        link:"https://kaspi.kz/shop/p/apple-macbook-air-13-mly13-zolotistyi-105933751/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAl9efBhAkEiwA4ToripR8RmO9dRcnyhCe8gDKXyQawh07bkkPy5RljGaB3Af50gm5NWZ5LBoCudwQAvD_BwE",
        image:{
            f:"https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h71/h26/52679167442974/noutbuk-apple-macbook-air-m2-8-cpu-8-gpu-256gb-starlight-105933751-1.jpg",
            s:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hee/h46/52679168032798/noutbuk-apple-macbook-air-m2-8-cpu-8-gpu-256gb-starlight-105933751-2.jpg",
            th:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hae/h9c/52679168491550/noutbuk-apple-macbook-air-m2-8-cpu-8-gpu-256gb-starlight-105933751-3.jpg",
            ft:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc9/h2e/52679168950302/noutbuk-apple-macbook-air-m2-8-cpu-8-gpu-256gb-starlight-105933751-4.jpg"
        }

    },
    {
        id:7,
        name:"Apple MacBook Air 13 MLXY3",
        description:"серебристый",
        price:"629 980 ₸",
        link:"https://kaspi.kz/shop/p/apple-macbook-air-13-mlxy3-serebristyi-106110064/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAl9efBhAkEiwA4ToripR8RmO9dRcnyhCe8gDKXyQawh07bkkPy5RljGaB3Af50gm5NWZ5LBoCudwQAvD_BwE",
        image:{
           f: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/heb/h8b/61792617234462/apple-macbook-air-13-mlxy3-serebristyj-106110064-1.jpg",
           s:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2e/h37/61792617758750/apple-macbook-air-13-mlxy3-serebristyj-106110064-2.jpg",
           th:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h9a/hee/61792618217502/apple-macbook-air-13-mlxy3-serebristyj-106110064-3.jpg",
           ft:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h68/h29/61792618741790/apple-macbook-air-13-mlxy3-serebristyj-106110064-4.jpg"
        }
    }

    ,
    {
        id:8,
        name:"Apple MacBook Pro 14 MKGP3",
        description:"серый",
        price:"986 975 ₸",
        link:"https://kaspi.kz/shop/p/apple-macbook-pro-14-mkgp3-seryi-102866247/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAl9efBhAkEiwA4ToripR8RmO9dRcnyhCe8gDKXyQawh07bkkPy5RljGaB3Af50gm5NWZ5LBoCudwQAvD_BwE",
        image:{
            f:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbf/h8a/47153374199838/apple-macbook-pro-14-mkgp3-seryj-102866247-1.jpg",
            s:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb1/hbf/50637730054174/apple-macbook-pro-14-mkgp3-seryj-102866247-2.jpg",
            th:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc6/ha4/50637730283550/apple-macbook-pro-14-mkgp3-seryj-102866247-3.jpg",
            ft:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4c/hc0/49341874208798/apple-macbook-pro-14-mkgp3-seryj-102866247-4.jpg"
        }
    },

    {
        id:9,
        name:"Apple MacBook Pro 13 MYD82",
        description:"серый",
        price:"673 409 ₸",
        link:"https://kaspi.kz/shop/p/apple-macbook-pro-13-myd82-seryi-100797630/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAl9efBhAkEiwA4ToripR8RmO9dRcnyhCe8gDKXyQawh07bkkPy5RljGaB3Af50gm5NWZ5LBoCudwQAvD_BwE",
        image:{
            f:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h54/hd7/33090953773086/apple-macbook-pro-13-myd82-seryi-100797630-1.jpg",
            s:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he9/h6a/66921281028126/apple-macbook-pro-13-myd82-seryi-100797630-2.jpg",
            th:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hee/h53/66921281290270/apple-macbook-pro-13-myd82-seryi-100797630-3.jpg",
            ft:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h68/h35/66921281552414/apple-macbook-pro-13-myd82-seryi-100797630-4.jpg"
        }
    },

    {
        id:10,
        name:"Apple MacBook Pro 13 MNEH3",
        description:"серый",
        price:"692 929 ₸",
        link:"https://kaspi.kz/shop/p/apple-macbook-pro-13-mneh3-seryi-105514238/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAl9efBhAkEiwA4ToripR8RmO9dRcnyhCe8gDKXyQawh07bkkPy5RljGaB3Af50gm5NWZ5LBoCudwQAvD_BwE",
        image:{
            f:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h7f/h40/51918241169438/apple-macbook-pro-13-mneh3-seryi-105514238-1.jpg",
            s:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hac/hae/51918241628190/apple-macbook-pro-13-mneh3-seryi-105514238-2.jpg",
            th:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h40/hf6/51918242086942/apple-macbook-pro-13-mneh3-seryi-105514238-3.jpg",
            ft:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h59/h17/51918242742302/apple-macbook-pro-13-mneh3-seryi-105514238-4.jpg"
        }
    }

];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/

