const agentsData = [
  {
    id: 1,
    name: "Rafay Qamar",
    company: "Qamar Group | REAL",
    location: "Chicago, IL",
    priceRange: "$18K - $2.1M",
    lastYearSales: 200,
    totalSales: 746,
    rating: 5.0,
    reviews: 680,
    team: true,
    image: "https://images.pexels.com/photos/7562311/pexels-photo-7562311.jpeg",
    recentSales: [
      {
        address: "320 W Oak St, Chicago, IL",
        price: "$945,000",
        beds: 4,
        baths: 3,
        sqft: 2500,
        image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg"
      },
      {
        address: "842 N Halsted St, Chicago, IL",
        price: "$1,120,000",
        beds: 3,
        baths: 2,
        sqft: 1900,
        image: "https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg"
      },
      {
        address: "1500 S Wabash Ave, Chicago, IL",
        price: "$670,000",
        beds: 2,
        baths: 2,
        sqft: 1450,
        image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg"
      },
      {
        address: "2019 W Division St, Chicago, IL",
        price: "$840,000",
        beds: 3,
        baths: 2,
        sqft: 1800,
        image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg"
      },
      {
        address: "614 W Fullerton Pkwy, Chicago, IL",
        price: "$1,015,000",
        beds: 4,
        baths: 3,
        sqft: 2300,
        image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg"
      }
    ],
    videoUrl: "https://www.youtube.com/embed/9LeAJSQiVPY",
  },
  {
    id: 2,
    name: "Eva Diaz",
    company: "ExaRealty",
    location: "New York, NY",
    priceRange: "$30K - $1.2M",
    lastYearSales: 150,
    totalSales: 582,
    rating: 5.0,
    reviews: 450,
    team: false,
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    recentSales: [
      {
        address: "Shamlimar Garden",
        price: "$821,000",
        beds: 4,
        baths: 1,
        sqft: 2500,
        image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg"
      },
      {
        address: "Francisco 3 ,Luis road",
        price: "$1,980,000",
        beds: 2,
        baths: 3,
        sqft: 1300,
        image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg"
      },
      {
        address: "1500 S Wabash Ave, Chicago, IL",
        price: "$670,000",
        beds: 2,
        baths: 2,
        sqft: 1450,
        image: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg"
      },
      {
        address: "2019 W Division St, Chicago, IL",
        price: "$840,000",
        beds: 3,
        baths: 2,
        sqft: 1800,
        image: "https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        address: "614 W Fullerton Pkwy, Chicago, IL",
        price: "$1,015,000",
        beds: 4,
        baths: 3,
        sqft: 2300,
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      }
    ],
    videoUrl: "https://www.youtube.com/embed/CwoLoe61hO8",
  },
  {
    id: 3,
    name: "Sohail Khan",
    company: "City Point Realty",
    location: "Los Angeles, CA",
    priceRange: "$75K - $2.5M",
    lastYearSales: 180,
    totalSales: 620,
    rating: 4.9,
    reviews: 390,
    team: true,
    image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
    recentSales: [
      {
        address: "320 W Oak St, Chicago, IL",
        price: "$945,000",
        beds: 4,
        baths: 3,
        sqft: 2500,
        image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        address: "842 N Halsted St, Chicago, IL",
        price: "$1,120,000",
        beds: 3,
        baths: 2,
        sqft: 1900,
        image: "https://plus.unsplash.com/premium_photo-1661883964999-c1bcb57a7357?q=80&w=1128&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        address: "1500 S Wabash Ave, Chicago, IL",
        price: "$670,000",
        beds: 2,
        baths: 2,
        sqft: 1450,
        image: "https://images.unsplash.com/photo-1602941525421-8f8b81d3edbb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        address: "2019 W Division St, Chicago, IL",
        price: "$840,000",
        beds: 3,
        baths: 2,
        sqft: 1800,
        image: "https://images.unsplash.com/photo-1723110994499-df46435aa4b3?q=80&w=1179&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        address: "614 W Fullerton Pkwy, Chicago, IL",
        price: "$1,015,000",
        beds: 4,
        baths: 3,
        sqft: 2300,
        image: "https://images.unsplash.com/photo-1719299225324-301bad5c333c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      }
    ],
    videoUrl: "https://www.youtube.com/embed/R_9-JElwV2A"

  },
  {
    id: 4,
    name: "Emily Watson",
    company: "BlueKey",
    location: "Chicago, IL",
    priceRange: "$90K - $1.5M",
    lastYearSales: 160,
    totalSales: 500,
    rating: 4.8,
    reviews: 320,
    team: false,
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    recentSales: [
      {
        address: "320 W Oak St, Chicago, IL",
        price: "$945,000",
        beds: 4,
        baths: 3,
        sqft: 2500,
        image: "https://images.unsplash.com/photo-1719294608301-efa8ecd6c9a1?q=80&w=655&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        address: "842 N Halsted St, Chicago, IL",
        price: "$1,120,000",
        beds: 3,
        baths: 2,
        sqft: 1900,
        image: "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        address: "1500 S Wabash Ave, Chicago, IL",
        price: "$670,000",
        beds: 2,
        baths: 2,
        sqft: 1450,
        image: "https://plus.unsplash.com/premium_photo-1687960117014-f6463f5b419a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        address: "2019 W Division St, Chicago, IL",
        price: "$840,000",
        beds: 3,
        baths: 2,
        sqft: 1800,
        image: "https://plus.unsplash.com/premium_photo-1689609950069-2961f80b1e70?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        address: "614 W Fullerton Pkwy, Chicago, IL",
        price: "$1,015,000",
        beds: 4,
        baths: 3,
        sqft: 2300,
        image: "https://media.istockphoto.com/id/2155335325/photo/single-family-home-with-clouds.jpg?s=1024x1024&w=is&k=20&c=YRV_yiIwVlV1ZKttYNVSgy9BrGNbn8fnT0gjgTN8QDs="
      }
    ]
  },
  {
    id: 5,
    name: "David Smith",
    company: "Metro Homes",
    location: "New York, NY",
    priceRange: "$40K - $1.3M",
    lastYearSales: 170,
    totalSales: 470,
    rating: 5.0,
    reviews: 410,
    team: true,
    image: "https://images.pexels.com/photos/2635315/pexels-photo-2635315.jpeg",
    recentSales: [
      {
        address: "320 W Oak St, Chicago, IL",
        price: "$945,000",
        beds: 4,
        baths: 3,
        sqft: 2500,
        image: "https://cdn.pixabay.com/photo/2018/01/31/12/16/architecture-3121009_1280.jpg"
      },
      {
        address: "842 N Halsted St, Chicago, IL",
        price: "$1,120,000",
        beds: 3,
        baths: 2,
        sqft: 1900,
        image: "https://plus.unsplash.com/premium_photo-1686090449192-4ab1d00cb735?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        address: "1500 S Wabash Ave, Chicago, IL",
        price: "$670,000",
        beds: 2,
        baths: 2,
        sqft: 1450,
        image: "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg"
      },
      {
        address: "2019 W Division St, Chicago, IL",
        price: "$840,000",
        beds: 3,
        baths: 2,
        sqft: 1800,
        image: "https://cdn.pixabay.com/photo/2019/09/15/14/22/coast-4478424_1280.jpg"},
      {
        address: "614 W Fullerton Pkwy, Chicago, IL",
        price: "$1,015,000",
        beds: 4,
        baths: 3,
        sqft: 2300,
        image: "https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_1280.jpg"
      }
    ],
    videoUrl: "https://www.youtube.com/embed/LrcZXcfAL8o",
  },
  {
    id: 6,
    name: "Zain Ali",
    company: "eXp Realty",
    location: "Chicago, IL",
    priceRange: "$120K - $3.0M",
    lastYearSales: 210,
    totalSales: 880,
    rating: 4.7,
    reviews: 510,
    team: true,
    image: "https://images.pexels.com/photos/31956288/pexels-photo-31956288.jpeg",
    recentSales: [
      {
        address: "320 W Oak St, Chicago, IL",
        price: "$945,000",
        beds: 4,
        baths: 3,
        sqft: 2500,
        image: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg"
      },
      {
        address: "842 N Halsted St, Chicago, IL",
        price: "$1,120,000",
        beds: 3,
        baths: 2,
        sqft: 1900,
        image: "https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg"
      },
      {
        address: "1500 S Wabash Ave, Chicago, IL",
        price: "$670,000",
        beds: 2,
        baths: 2,
        sqft: 1450,
        image: "https://images.pexels.com/photos/277667/pexels-photo-277667.jpeg"
      },
      {
        address: "2019 W Division St, Chicago, IL",
        price: "$840,000",
        beds: 3,
        baths: 2,
        sqft: 1800,
        image: "https://images.pexels.com/photos/209315/pexels-photo-209315.jpeg"
      },
      {
        address: "614 W Fullerton Pkwy, Chicago, IL",
        price: "$1,015,000",
        beds: 4,
        baths: 3,
        sqft: 2300,
        image: "https://images.pexels.com/photos/262405/pexels-photo-262405.jpeg"
      }
    ],
    videoUrl: "https://www.youtube.com/embed/cBKItGWe1F0",
  },
  {
    id: 7,
    name: "Aisha Khan",
    company: "Skyline Group",
    location: "Los Angeles, CA",
    priceRange: "$60K - $1.8M",
    lastYearSales: 130,
    totalSales: 360,
    rating: 5.0,
    reviews: 220,
    team: false,
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    recentSales: [
      {
        address: "320 W Oak St, Chicago, IL",
        price: "$945,000",
        beds: 4,
        baths: 3,
        sqft: 2500,
        image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg"
      },
      {
        address: "842 N Halsted St, Chicago, IL",
        price: "$1,120,000",
        beds: 3,
        baths: 2,
        sqft: 1900,
        image: "https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg"
      },
      {
        address: "1500 S Wabash Ave, Chicago, IL",
        price: "$670,000",
        beds: 2,
        baths: 2,
        sqft: 1450,
        image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg"
      },
      {
        address: "2019 W Division St, Chicago, IL",
        price: "$840,000",
        beds: 3,
        baths: 2,
        sqft: 1800,
        image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg"
      },
      {
        address: "614 W Fullerton Pkwy, Chicago, IL",
        price: "$1,015,000",
        beds: 4,
        baths: 3,
        sqft: 2300,
        image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg"
      }
    ],
    videoUrl: "https://www.youtube.com/embed/KWJSywdksc8",

  },
  {
    id: 8,
    name: "Omar Patel",
    company: "Qamar Group | REAL",
    location: "Chicago, IL",
    priceRange: "$95K - $2.0M",
    lastYearSales: 140,
    totalSales: 410,
    rating: 4.6,
    reviews: 280,
    team: true,
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    recentSales: [
      {
        address: "320 W Oak St, Chicago, IL",
        price: "$945,000",
        beds: 4,
        baths: 3,
        sqft: 2500,
        image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg"
      },
      {
        address: "842 N Halsted St, Chicago, IL",
        price: "$1,120,000",
        beds: 3,
        baths: 2,
        sqft: 1900,
        image: "https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg"
      },
      {
        address: "1500 S Wabash Ave, Chicago, IL",
        price: "$670,000",
        beds: 2,
        baths: 2,
        sqft: 1450,
        image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg"
      },
      {
        address: "2019 W Division St, Chicago, IL",
        price: "$840,000",
        beds: 3,
        baths: 2,
        sqft: 1800,
        image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg"
      },
      {
        address: "614 W Fullerton Pkwy, Chicago, IL",
        price: "$1,015,000",
        beds: 4,
        baths: 3,
        sqft: 2300,
        image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg"
      }
    ],
    videoUrl: "https://youtu.be/eolQhOIi6UA?si=nTHw0kPOrj-suiiQ",
  },
  {
    id: 9,
    name: "Maya Shah",
    company: "BlueKey",
    location: "New York, NY",
    priceRange: "$85K - $2.4M",
    lastYearSales: 190,
    totalSales: 520,
    rating: 4.9,
    reviews: 360,
    team: true,
    image: "https://images.pexels.com/photos/17041073/pexels-photo-17041073.jpeg",
    recentSales: [
      {
        address: "320 W Oak St, Chicago, IL",
        price: "$945,000",
        beds: 4,
        baths: 3,
        sqft: 2500,
        image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg"
      },
      {
        address: "842 N Halsted St, Chicago, IL",
        price: "$1,120,000",
        beds: 3,
        baths: 2,
        sqft: 1900,
        image: "https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg"
      },
      {
        address: "1500 S Wabash Ave, Chicago, IL",
        price: "$670,000",
        beds: 2,
        baths: 2,
        sqft: 1450,
        image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg"
      },
      {
        address: "2019 W Division St, Chicago, IL",
        price: "$840,000",
        beds: 3,
        baths: 2,
        sqft: 1800,
        image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg"
      },
      {
        address: "614 W Fullerton Pkwy, Chicago, IL",
        price: "$1,015,000",
        beds: 4,
        baths: 3,
        sqft: 2300,
        image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg"
      }
    ],
    videoUrl: "https://www.youtube.com/embed/eolQhOIi6UA",
  },
  {
    id: 10,
    name: "Nicholas Conteduca",
    company: "Metro Homes",
    location: "Los Angeles, CA",
    priceRange: "$70K - $2.1M",
    lastYearSales: 155,
    totalSales: 460,
    rating: 5.0,
    reviews: 300,
    team: false,
    image: "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg",
    recentSales: [
      {
        address: "320 W Oak St, Chicago, IL",
        price: "$945,000",
        beds: 4,
        baths: 3,
        sqft: 2500,
        image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg"
      },
      {
        address: "842 N Halsted St, Chicago, IL",
        price: "$1,120,000",
        beds: 3,
        baths: 2,
        sqft: 1900,
        image: "https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg"
      },
      {
        address: "1500 S Wabash Ave, Chicago, IL",
        price: "$670,000",
        beds: 2,
        baths: 2,
        sqft: 1450,
        image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg"
      },
      {
        address: "2019 W Division St, Chicago, IL",
        price: "$840,000",
        beds: 3,
        baths: 2,
        sqft: 1800,
        image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg"
      },
      {
        address: "614 W Fullerton Pkwy, Chicago, IL",
        price: "$1,015,000",
        beds: 4,
        baths: 3,
        sqft: 2300,
        image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg"
      }
    ],
    videoUrl: "https://www.youtube.com/embed/-J_saU6JkBA",
  },
  {
    id: 11,
    name: "Layla Brooks",
    company: "Urban Dwellings",
    location: "Austin, TX",
    priceRange: "$150K - $3.2M",
    lastYearSales: 120,
    totalSales: 300,
    rating: 4.6,
    reviews: 200,
    team: false,
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    recentSales: [
      {
        address: "320 W Oak St, Chicago, IL",
        price: "$945,000",
        beds: 4,
        baths: 3,
        sqft: 2500,
        image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg"
      },
      {
        address: "842 N Halsted St, Chicago, IL",
        price: "$1,120,000",
        beds: 3,
        baths: 2,
        sqft: 1900,
        image: "https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg"
      },
      {
        address: "1500 S Wabash Ave, Chicago, IL",
        price: "$670,000",
        beds: 2,
        baths: 2,
        sqft: 1450,
        image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg"
      },
      {
        address: "2019 W Division St, Chicago, IL",
        price: "$840,000",
        beds: 3,
        baths: 2,
        sqft: 1800,
        image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg"
      },
      {
        address: "614 W Fullerton Pkwy, Chicago, IL",
        price: "$1,015,000",
        beds: 4,
        baths: 3,
        sqft: 2300,
        image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg"
      }
    ],
    videoUrl: "https://www.youtube.com/embed/0lNP40bk5ro",
  },
  {
    id: 12,
    name: "Marcus Lee",
    company: "Bayfront Realty",
    location: "San Francisco, CA",
    priceRange: "$400K - $4.0M",
    lastYearSales: 210,
    totalSales: 620,
    rating: 4.9,
    reviews: 330,
    team: true,
    image: "https://images.pexels.com/photos/1232459/pexels-photo-1232459.jpeg",
    recentSales: [
      {
        address: "320 W Oak St, Chicago, IL",
        price: "$945,000",
        beds: 4,
        baths: 3,
        sqft: 2500,
        image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg"
      },
      {
        address: "842 N Halsted St, Chicago, IL",
        price: "$1,120,000",
        beds: 3,
        baths: 2,
        sqft: 1900,
        image: "https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg"
      },
      {
        address: "1500 S Wabash Ave, Chicago, IL",
        price: "$670,000",
        beds: 2,
        baths: 2,
        sqft: 1450,
        image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg"
      },
      {
        address: "2019 W Division St, Chicago, IL",
        price: "$840,000",
        beds: 3,
        baths: 2,
        sqft: 1800,
        image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg"
      },
      {
        address: "614 W Fullerton Pkwy, Chicago, IL",
        price: "$1,015,000",
        beds: 4,
        baths: 3,
        sqft: 2300,
        image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg"
      }
    ],
    videoUrl: "https://www.youtube.com/embed/2VakYh-thlo",
  },
  {
    id: 13,
    name: "Nora Green",
    company: "Riverbend Group",
    location: "Denver, CO",
    priceRange: "$230K - $2.7M",
    lastYearSales: 180,
    totalSales: 540,
    rating: 4.7,
    reviews: 280,
    team: true,
    image: "https://images.pexels.com/photos/31806502/pexels-photo-31806502.jpeg",
    recentSales: [
      {
        address: "320 W Oak St, Chicago, IL",
        price: "$945,000",
        beds: 4,
        baths: 3,
        sqft: 2500,
        image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg"
      },
      {
        address: "842 N Halsted St, Chicago, IL",
        price: "$1,120,000",
        beds: 3,
        baths: 2,
        sqft: 1900,
        image: "https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg"
      },
      {
        address: "1500 S Wabash Ave, Chicago, IL",
        price: "$670,000",
        beds: 2,
        baths: 2,
        sqft: 1450,
        image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg"
      },
      {
        address: "2019 W Division St, Chicago, IL",
        price: "$840,000",
        beds: 3,
        baths: 2,
        sqft: 1800,
        image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg"
      },
      {
        address: "614 W Fullerton Pkwy, Chicago, IL",
        price: "$1,015,000",
        beds: 4,
        baths: 3,
        sqft: 2300,
        image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg"
      }
    ],
    videoUrl: "https://www.youtube.com/embed/XE879JZQIuY",
  },
  {
    id: 14,
    name: "Jake Thomas",
    company: "Hillside Realty",
    location: "Phoenix, AZ",
    priceRange: "$140K - $2.1M",
    lastYearSales: 160,
    totalSales: 490,
    rating: 4.8,
    reviews: 290,
    team: false,
    image: "https://images.pexels.com/photos/1002406/pexels-photo-1002406.jpeg",
    recentSales: [
      {
        address: "320 W Oak St, Chicago, IL",
        price: "$945,000",
        beds: 4,
        baths: 3,
        sqft: 2500,
        image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg"
      },
      {
        address: "842 N Halsted St, Chicago, IL",
        price: "$1,120,000",
        beds: 3,
        baths: 2,
        sqft: 1900,
        image: "https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg"
      },
      {
        address: "1500 S Wabash Ave, Chicago, IL",
        price: "$670,000",
        beds: 2,
        baths: 2,
        sqft: 1450,
        image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg"
      },
      {
        address: "2019 W Division St, Chicago, IL",
        price: "$840,000",
        beds: 3,
        baths: 2,
        sqft: 1800,
        image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg"
      },
      {
        address: "614 W Fullerton Pkwy, Chicago, IL",
        price: "$1,015,000",
        beds: 4,
        baths: 3,
        sqft: 2300,
        image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg"
      }
    ],
    videoUrl: "https://www.youtube.com/embed/zd2DPxc50KY",
  },
  {
    id: 15,
    name: "Amira Sheikh",
    company: "NextHome Group",
    location: "Houston, TX",
    priceRange: "$210K - $2.9M",
    lastYearSales: 140,
    totalSales: 430,
    rating: 5.0,
    reviews: 350,
    team: true,
    image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg",
    recentSales: [
      {
        address: "320 W Oak St, Chicago, IL",
        price: "$945,000",
        beds: 4,
        baths: 3,
        sqft: 2500,
        image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg"
      },
      {
        address: "842 N Halsted St, Chicago, IL",
        price: "$1,120,000",
        beds: 3,
        baths: 2,
        sqft: 1900,
        image: "https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg"
      },
      {
        address: "1500 S Wabash Ave, Chicago, IL",
        price: "$670,000",
        beds: 2,
        baths: 2,
        sqft: 1450,
        image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg"
      },
      {
        address: "2019 W Division St, Chicago, IL",
        price: "$840,000",
        beds: 3,
        baths: 2,
        sqft: 1800,
        image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg"
      },
      {
        address: "614 W Fullerton Pkwy, Chicago, IL",
        price: "$1,015,000",
        beds: 4,
        baths: 3,
        sqft: 2300,
        image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg"
      }
    ],
    videoUrl: "https://www.youtube.com/embed/MXkCzM5oiUA",
  },
  {
    id: 16,
    name: "Brian Chen",
    company: "Skyline Properties",
    location: "Seattle, WA",
    priceRange: "$300K - $3.5M",
    lastYearSales: 190,
    totalSales: 560,
    rating: 4.9,
    reviews: 400,
    team: false,
    image: "https://images.pexels.com/photos/5397723/pexels-photo-5397723.jpeg",
    recentSales: [
      {
        address: "320 W Oak St, Chicago, IL",
        price: "$945,000",
        beds: 4,
        baths: 3,
        sqft: 2500,
        image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg"
      },
      {
        address: "842 N Halsted St, Chicago, IL",
        price: "$1,120,000",
        beds: 3,
        baths: 2,
        sqft: 1900,
        image: "https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg"
      },
      {
        address: "1500 S Wabash Ave, Chicago, IL",
        price: "$670,000",
        beds: 2,
        baths: 2,
        sqft: 1450,
        image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg"
      },
      {
        address: "2019 W Division St, Chicago, IL",
        price: "$840,000",
        beds: 3,
        baths: 2,
        sqft: 1800,
        image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg"
      },
      {
        address: "614 W Fullerton Pkwy, Chicago, IL",
        price: "$1,015,000",
        beds: 4,
        baths: 3,
        sqft: 2300,
        image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg"
      }
    ],
    videoUrl: "https://www.youtube.com/embed/eolQhOIi6UA",
  },
  {
    id: 17,
    name: "Sofia Romano",
    company: "Casa Realty",
    location: "Miami, FL",
    priceRange: "$110K - $1.9M",
    lastYearSales: 170,
    totalSales: 510,
    rating: 4.8,
    reviews: 310,
    team: true,
    image: "https://images.pexels.com/photos/29582944/pexels-photo-29582944.jpeg",
    recentSales: [
      {
        address: "320 W Oak St, Chicago, IL",
        price: "$945,000",
        beds: 4,
        baths: 3,
        sqft: 2500,
        image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg"
      },
      {
        address: "842 N Halsted St, Chicago, IL",
        price: "$1,120,000",
        beds: 3,
        baths: 2,
        sqft: 1900,
        image: "https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg"
      },
      {
        address: "1500 S Wabash Ave, Chicago, IL",
        price: "$670,000",
        beds: 2,
        baths: 2,
        sqft: 1450,
        image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg"
      },
      {
        address: "2019 W Division St, Chicago, IL",
        price: "$840,000",
        beds: 3,
        baths: 2,
        sqft: 1800,
        image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg"
      },
      {
        address: "614 W Fullerton Pkwy, Chicago, IL",
        price: "$1,015,000",
        beds: 4,
        baths: 3,
        sqft: 2300,
        image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg"
      }
    ],
    videoUrl: "https://www.youtube.com/embed/TpP3aJ3PYSY",
  },
  {
    id: 18,
    name: "Dylan West",
    company: "GreenLeaf Homes",
    location: "Nashville, TN",
    priceRange: "$180K - $2.3M",
    lastYearSales: 150,
    totalSales: 450,
    rating: 5.0,
    reviews: 275,
    team: false,
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
    recentSales: [
      {
        address: "320 W Oak St, Chicago, IL",
        price: "$945,000",
        beds: 4,
        baths: 3,
        sqft: 2500,
        image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg"
      },
      {
        address: "842 N Halsted St, Chicago, IL",
        price: "$1,120,000",
        beds: 3,
        baths: 2,
        sqft: 1900,
        image: "https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg"
      },
      {
        address: "1500 S Wabash Ave, Chicago, IL",
        price: "$670,000",
        beds: 2,
        baths: 2,
        sqft: 1450,
        image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg"
      },
      {
        address: "2019 W Division St, Chicago, IL",
        price: "$840,000",
        beds: 3,
        baths: 2,
        sqft: 1800,
        image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg"
      },
      {
        address: "614 W Fullerton Pkwy, Chicago, IL",
        price: "$1,015,000",
        beds: 4,
        baths: 3,
        sqft: 2300,
        image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg"
      }
    ],
    videoUrl: "https://www.youtube.com/embed/CxbsjyRkf8o",
  },
  {
    id: 19,
    name: "Ava Singh",
    company: "UrbanEdge",
    location: "Philadelphia, PA",
    priceRange: "$130K - $1.7M",
    lastYearSales: 140,
    totalSales: 470,
    rating: 4.7,
    reviews: 260,
    team: true,
    image: "https://images.pexels.com/photos/31662639/pexels-photo-31662639.jpeg",
    recentSales: [
      {
        address: "320 W Oak St, Chicago, IL",
        price: "$945,000",
        beds: 4,
        baths: 3,
        sqft: 2500,
        image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg"
      },
      {
        address: "842 N Halsted St, Chicago, IL",
        price: "$1,120,000",
        beds: 3,
        baths: 2,
        sqft: 1900,
        image: "https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg"
      },
      {
        address: "1500 S Wabash Ave, Chicago, IL",
        price: "$670,000",
        beds: 2,
        baths: 2,
        sqft: 1450,
        image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg"
      },
      {
        address: "2019 W Division St, Chicago, IL",
        price: "$840,000",
        beds: 3,
        baths: 2,
        sqft: 1800,
        image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg"
      },
      {
        address: "614 W Fullerton Pkwy, Chicago, IL",
        price: "$1,015,000",
        beds: 4,
        baths: 3,
        sqft: 2300,
        image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg"
      }
    ],
    videoUrl: "https://www.youtube.com/embed/5P24cX6gzlA",
    
  },
  {
    id: 20,
    name: "Leo Hernandez",
    company: "MetroEdge Realty",
    location: "San Diego, CA",
    priceRange: "$200K - $2.6M",
    lastYearSales: 160,
    totalSales: 500,
    rating: 4.9,
    reviews: 320,
    team: false,
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    recentSales: [
      {
        address: "320 W Oak St, Chicago, IL",
        price: "$945,000",
        beds: 4,
        baths: 3,
        sqft: 2500,
        image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg"
      },
      {
        address: "842 N Halsted St, Chicago, IL",
        price: "$1,120,000",
        beds: 3,
        baths: 2,
        sqft: 1900,
        image: "https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg"
      },
      {
        address: "1500 S Wabash Ave, Chicago, IL",
        price: "$670,000",
        beds: 2,
        baths: 2,
        sqft: 1450,
        image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg"
      },
      {
        address: "2019 W Division St, Chicago, IL",
        price: "$840,000",
        beds: 3,
        baths: 2,
        sqft: 1800,
        image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg"
      },
      {
        address: "614 W Fullerton Pkwy, Chicago, IL",
        price: "$1,015,000",
        beds: 4,
        baths: 3,
        sqft: 2300,
        image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg"
      }
    ],
    videoUrl: "https://www.youtube.com/embed/EBJ-cwvEhI0",
  }
];

export default agentsData;
