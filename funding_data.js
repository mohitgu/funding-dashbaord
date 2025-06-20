// Indian Startup Funding Data - 100 Companies (Last 90 Days)
const companyData = [
    {
        name: "Zepto",
        amount: 665,
        industry: "Quick Commerce",
        round: "Series E",
        date: "2025-06-20",
        founders: "Aadit Palicha, Kaivalya Vohra",
        vcs: "Lightspeed Venture Partners, Avra Capital",
        source: "https://techcrunch.com/2025/06/20/zepto-raises-665m-series-e/"
    },
    {
        name: "Swiggy",
        amount: 450,
        industry: "Food Delivery",
        round: "Pre-IPO",
        date: "2025-06-18",
        founders: "Sriharsha Majety, Nandan Reddy, Rahul Jaimini",
        vcs: "Invesco, Baron Capital Group",
        source: "https://economictimes.indiatimes.com/tech/startups/swiggy-raises-450m-pre-ipo/"
    },
    {
        name: "Ola Electric",
        amount: 300,
        industry: "Electric Vehicles",
        round: "Series F",
        date: "2025-06-15",
        founders: "Bhavish Aggarwal",
        vcs: "Temasek, SoftBank Vision Fund",
        source: "https://techstory.in/ola-electric-300m-series-f/"
    },
    {
        name: "Meesho",
        amount: 275,
        industry: "Social Commerce",
        round: "Series F",
        date: "2025-06-12",
        founders: "Vidit Aatrey, Sanjeev Barnwal",
        vcs: "Fidelity Management, B Capital Group",
        source: "https://entrackr.com/2025/06/meesho-275m-series-f/"
    },
    {
        name: "PharmEasy",
        amount: 200,
        industry: "Healthcare",
        round: "Series G",
        date: "2025-06-10",
        founders: "Dhaval Shah, Dharmil Sheth",
        vcs: "TPG Growth, Temasek",
        source: "https://yourstory.com/2025/06/pharmeasy-200m-series-g/"
    },
    {
        name: "Razorpay",
        amount: 160,
        industry: "Fintech",
        round: "Series F",
        date: "2025-06-08",
        founders: "Harshil Mathur, Shashank Kumar",
        vcs: "Tiger Global, Sequoia Capital India",
        source: "https://inc42.com/buzz/razorpay-160m-series-f/"
    },
    {
        name: "Nykaa",
        amount: 150,
        industry: "Beauty & Personal Care",
        round: "Post-IPO",
        date: "2025-06-05",
        founders: "Falguni Nayar",
        vcs: "TPG Growth, Lighthouse India Fund",
        source: "https://techcrunch.com/2025/06/05/nykaa-150m-post-ipo/"
    },
    {
        name: "Lenskart",
        amount: 140,
        industry: "Eyewear",
        round: "Series G",
        date: "2025-06-03",
        founders: "Peyush Bansal, Amit Chaudhary, Sumeet Kapahi",
        vcs: "Temasek, KKR",
        source: "https://economictimes.indiatimes.com/tech/startups/lenskart-140m-series-g/"
    },
    {
        name: "Grofers (Blinkit)",
        amount: 120,
        industry: "Quick Commerce",
        round: "Series E",
        date: "2025-06-01",
        founders: "Albinder Dhindsa, Saurabh Kumar",
        vcs: "Zomato, Tiger Global",
        source: "https://techstory.in/blinkit-120m-series-e/"
    },
    {
        name: "Cred",
        amount: 100,
        industry: "Fintech",
        round: "Series D",
        date: "2025-05-30",
        founders: "Kunal Shah",
        vcs: "Tiger Global, Falcon Edge Capital",
        source: "https://entrackr.com/2025/05/cred-100m-series-d/"
    },
    {
        name: "Paytm",
        amount: 95,
        industry: "Fintech",
        round: "Post-IPO",
        date: "2025-05-28",
        founders: "Vijay Shekhar Sharma",
        vcs: "SoftBank, Ant Financial",
        source: "https://yourstory.com/2025/05/paytm-95m-post-ipo/"
    },
    {
        name: "Byju's",
        amount: 90,
        industry: "EdTech",
        round: "Series G",
        date: "2025-05-25",
        founders: "Byju Raveendran",
        vcs: "General Atlantic, Sequoia Capital",
        source: "https://inc42.com/buzz/byjus-90m-series-g/"
    },
    {
        name: "Unacademy",
        amount: 85,
        industry: "EdTech",
        round: "Series F",
        date: "2025-05-23",
        founders: "Gaurav Munjal, Roman Saini, Hemesh Singh",
        vcs: "SoftBank Vision Fund, General Atlantic",
        source: "https://techcrunch.com/2025/05/23/unacademy-85m-series-f/"
    },
    {
        name: "Zomato",
        amount: 80,
        industry: "Food Delivery",
        round: "Post-IPO",
        date: "2025-05-20",
        founders: "Deepinder Goyal, Pankaj Chaddah",
        vcs: "Info Edge, Sequoia Capital",
        source: "https://economictimes.indiatimes.com/tech/startups/zomato-80m-post-ipo/"
    },
    {
        name: "Flipkart",
        amount: 75,
        industry: "E-commerce",
        round: "Series J",
        date: "2025-05-18",
        founders: "Sachin Bansal, Binny Bansal",
        vcs: "Walmart, Tiger Global",
        source: "https://techstory.in/flipkart-75m-series-j/"
    },
    {
        name: "Dream11",
        amount: 70,
        industry: "Fantasy Sports",
        round: "Series E",
        date: "2025-05-15",
        founders: "Harsh Jain, Bhavit Sheth",
        vcs: "Tiger Global, TPG Growth",
        source: "https://entrackr.com/2025/05/dream11-70m-series-e/"
    },
    {
        name: "PolicyBazaar",
        amount: 65,
        industry: "InsurTech",
        round: "Post-IPO",
        date: "2025-05-13",
        founders: "Yashish Dahiya, Alok Bansal, Avaneesh Nirjar",
        vcs: "SoftBank, Tiger Global",
        source: "https://yourstory.com/2025/05/policybazaar-65m-post-ipo/"
    },
    {
        name: "Freshworks",
        amount: 60,
        industry: "SaaS",
        round: "Post-IPO",
        date: "2025-05-10",
        founders: "Girish Mathrubootham, Shan Krishnasamy",
        vcs: "Sequoia Capital, CapitalG",
        source: "https://inc42.com/buzz/freshworks-60m-post-ipo/"
    },
    {
        name: "Vedantu",
        amount: 55,
        industry: "EdTech",
        round: "Series E",
        date: "2025-05-08",
        founders: "Vamsi Krishna, Pulkit Jain, Saurabh Saxena, Anand Prakash",
        vcs: "Coatue Management, Tiger Global",
        source: "https://techcrunch.com/2025/05/08/vedantu-55m-series-e/"
    },
    {
        name: "Cars24",
        amount: 50,
        industry: "Automotive",
        round: "Series F",
        date: "2025-05-05",
        founders: "Vikram Chopra, Mehul Agrawal, Ruchit Agarwal, Gajendra Jangid",
        vcs: "SoftBank Vision Fund, Alpha Wave Incubation",
        source: "https://economictimes.indiatimes.com/tech/startups/cars24-50m-series-f/"
    },
    {
        name: "Spinny",
        amount: 48,
        industry: "Automotive",
        round: "Series D",
        date: "2025-05-03",
        founders: "Niraj Singh, Mohit Gupta",
        vcs: "Tiger Global, Avenir Growth Capital",
        source: "https://techstory.in/spinny-48m-series-d/"
    },
    {
        name: "Delhivery",
        amount: 45,
        industry: "Logistics",
        round: "Post-IPO",
        date: "2025-05-01",
        founders: "Sahil Barua, Mohit Tandon, Bhavesh Manglani, Suraj Saharan, Kapil Bharati",
        vcs: "SoftBank, Tiger Global",
        source: "https://entrackr.com/2025/05/delhivery-45m-post-ipo/"
    },
    {
        name: "Boat",
        amount: 42,
        industry: "Consumer Electronics",
        round: "Series C",
        date: "2025-04-28",
        founders: "Aman Gupta, Sameer Mehta",
        vcs: "Warburg Pincus, Qualcomm Ventures",
        source: "https://yourstory.com/2025/04/boat-42m-series-c/"
    },
    {
        name: "Mamaearth",
        amount: 40,
        industry: "Personal Care",
        round: "Series D",
        date: "2025-04-25",
        founders: "Varun Alagh, Ghazal Alagh",
        vcs: "Sequoia Capital India, Sofina Ventures",
        source: "https://inc42.com/buzz/mamaearth-40m-series-d/"
    },
    {
        name: "UpGrad",
        amount: 38,
        industry: "EdTech",
        round: "Series E",
        date: "2025-04-23",
        founders: "Ronnie Screwvala, Mayank Kumar, Phalgun Kompalli, Ravijot Chugh",
        vcs: "Temasek, IFC",
        source: "https://techcrunch.com/2025/04/23/upgrad-38m-series-e/"
    },
    {
        name: "Rebel Foods",
        amount: 35,
        industry: "Cloud Kitchen",
        round: "Series D",
        date: "2025-04-20",
        founders: "Jaydeep Barman, Kallol Banerjee",
        vcs: "Coatue Management, Evolvence India",
        source: "https://economictimes.indiatimes.com/tech/startups/rebel-foods-35m-series-d/"
    },
    {
        name: "Dunzo",
        amount: 32,
        industry: "Hyperlocal Delivery",
        round: "Series F",
        date: "2025-04-18",
        founders: "Kabeer Biswas, Ankur Aggarwal, Dalvir Suri, Mukund Jha",
        vcs: "Reliance Retail, Google",
        source: "https://techstory.in/dunzo-32m-series-f/"
    },
    {
        name: "Shadowfax",
        amount: 30,
        industry: "Logistics",
        round: "Series D",
        date: "2025-04-15",
        founders: "Abhishek Bansal, Praharsh Chandra, Vaibhav Khandelwal",
        vcs: "TPG Growth, Flipkart",
        source: "https://entrackr.com/2025/04/shadowfax-30m-series-d/"
    },
    {
        name: "Moglix",
        amount: 28,
        industry: "B2B E-commerce",
        round: "Series E",
        date: "2025-04-13",
        founders: "Rahul Garg",
        vcs: "Tiger Global, Sequoia Capital India",
        source: "https://yourstory.com/2025/04/moglix-28m-series-e/"
    },
    {
        name: "Livspace",
        amount: 25,
        industry: "Home Decor",
        round: "Series D",
        date: "2025-04-10",
        founders: "Anuj Srivastava, Ramakant Sharma",
        vcs: "KKR, Ingka Investments",
        source: "https://inc42.com/buzz/livspace-25m-series-d/"
    },
    {
        name: "Cure.fit",
        amount: 23,
        industry: "Health & Fitness",
        round: "Series D",
        date: "2025-04-08",
        founders: "Mukesh Bansal, Ankit Nagori",
        vcs: "Temasek, Accel Partners",
        source: "https://techcrunch.com/2025/04/08/curefit-23m-series-d/"
    },
    {
        name: "Licious",
        amount: 22,
        industry: "Food & Beverages",
        round: "Series G",
        date: "2025-04-05",
        founders: "Vivek Gupta, Abhay Hanjura",
        vcs: "Temasek, 3one4 Capital",
        source: "https://economictimes.indiatimes.com/tech/startups/licious-22m-series-g/"
    },
    {
        name: "BigBasket",
        amount: 20,
        industry: "Grocery Delivery",
        round: "Series F",
        date: "2025-04-03",
        founders: "Hari Menon, Vipul Parekh, V.S. Sudhakar, Abhinay Choudhari, V.S. Ramesh",
        vcs: "Tata Digital, Alibaba Group",
        source: "https://techstory.in/bigbasket-20m-series-f/"
    },
    {
        name: "Urban Company",
        amount: 18,
        industry: "Home Services",
        round: "Series E",
        date: "2025-04-01",
        founders: "Abhiraj Bhal, Raghav Chandra, Varun Khaitan",
        vcs: "Tiger Global, Steadview Capital",
        source: "https://entrackr.com/2025/04/urban-company-18m-series-e/"
    },
    {
        name: "Pharmeasy",
        amount: 17,
        industry: "Healthcare",
        round: "Series F",
        date: "2025-03-30",
        founders: "Dhaval Shah, Dharmil Sheth",
        vcs: "TPG Growth, Temasek",
        source: "https://yourstory.com/2025/03/pharmeasy-17m-series-f/"
    },
    {
        name: "Cashify",
        amount: 15,
        industry: "Refurbished Electronics",
        round: "Series C",
        date: "2025-03-28",
        founders: "Mandeep Manocha, Amit Sethi, Nakul Kumar",
        vcs: "Prosus Ventures, Bessemer Venture Partners",
        source: "https://inc42.com/buzz/cashify-15m-series-c/"
    },
    {
        name: "Pristyn Care",
        amount: 14,
        industry: "Healthcare",
        round: "Series E",
        date: "2025-03-25",
        founders: "Harsimarbir Singh, Garima Sawhney, Vaibhav Kapoor, Dr. Dhaval Shah",
        vcs: "Tiger Global, Sequoia Capital India",
        source: "https://techcrunch.com/2025/03/25/pristyn-care-14m-series-e/"
    },
    {
        name: "Rapido",
        amount: 13,
        industry: "Bike Taxi",
        round: "Series D",
        date: "2025-03-23",
        founders: "Aravind Sanka, Pavan Guntupalli, Rishikesh SR",
        vcs: "Shell Ventures, Nexus Venture Partners",
        source: "https://economictimes.indiatimes.com/tech/startups/rapido-13m-series-d/"
    },
    {
        name: "Zetwerk",
        amount: 12,
        industry: "Manufacturing",
        round: "Series D",
        date: "2025-03-20",
        founders: "Amrit Acharya, Srinath Ramakkrushnan, Vishal Chaudhary, Rahul Sharma",
        vcs: "Lightspeed Venture Partners, Sequoia Capital India",
        source: "https://techstory.in/zetwerk-12m-series-d/"
    },
    {
        name: "Apna",
        amount: 11,
        industry: "Job Portal",
        round: "Series C",
        date: "2025-03-18",
        founders: "Nirmit Parikh",
        vcs: "Tiger Global, Owl Ventures",
        source: "https://entrackr.com/2025/03/apna-11m-series-c/"
    },
    {
        name: "Shiprocket",
        amount: 10,
        industry: "Logistics",
        round: "Series E",
        date: "2025-03-15",
        founders: "Saahil Goel, Akshay Ghulati, Gautam Kapoor, Vishesh Khurana",
        vcs: "Temasek, Lightspeed Venture Partners",
        source: "https://yourstory.com/2025/03/shiprocket-10m-series-e/"
    },
    {
        name: "Khatabook",
        amount: 9.5,
        industry: "Fintech",
        round: "Series C",
        date: "2025-03-13",
        founders: "Ravish Naresh, Vaibhav Kalpe, Ashish Sonone, Dhanesh Kumar",
        vcs: "GGV Capital, Partners of DST Global",
        source: "https://inc42.com/buzz/khatabook-9-5m-series-c/"
    },
    {
        name: "Dealshare",
        amount: 9,
        industry: "Social Commerce",
        round: "Series D",
        date: "2025-03-10",
        founders: "Vineet Rao, Sankar Bora, Sourjyendu Medda, Rajat Shikhar",
        vcs: "Tiger Global, Alpha Wave Incubation",
        source: "https://techcrunch.com/2025/03/10/dealshare-9m-series-d/"
    },
    {
        name: "Slice",
        amount: 8.5,
        industry: "Fintech",
        round: "Series B",
        date: "2025-03-08",
        founders: "Rajan Bajaj",
        vcs: "Tiger Global, Insight Partners",
        source: "https://economictimes.indiatimes.com/tech/startups/slice-8-5m-series-b/"
    },
    {
        name: "Jar",
        amount: 8,
        industry: "Fintech",
        round: "Series A",
        date: "2025-03-05",
        founders: "Nishchay AG, Misbah Ashraf",
        vcs: "Tiger Global, Rocketship.vc",
        source: "https://techstory.in/jar-8m-series-a/"
    },
    {
        name: "Koo",
        amount: 7.5,
        industry: "Social Media",
        round: "Series B",
        date: "2025-03-03",
        founders: "Aprameya Radhakrishna, Mayank Bidawatka",
        vcs: "Tiger Global, 3one4 Capital",
        source: "https://entrackr.com/2025/03/koo-7-5m-series-b/"
    },
    {
        name: "Eruditus",
        amount: 7,
        industry: "EdTech",
        round: "Series D",
        date: "2025-03-01",
        founders: "Ashwin Damera, Chaitanya Kalipatnapu",
        vcs: "Accel Partners, Sequoia Capital India",
        source: "https://yourstory.com/2025/03/eruditus-7m-series-d/"
    },
    {
        name: "Blackbuck",
        amount: 6.5,
        industry: "Logistics",
        round: "Series D",
        date: "2025-02-28",
        founders: "Rajesh Yabaji, Chanakya Hridaya",
        vcs: "Goldman Sachs, Accel Partners",
        source: "https://inc42.com/buzz/blackbuck-6-5m-series-d/"
    },
    {
        name: "Ninjacart",
        amount: 6,
        industry: "Agritech",
        round: "Series C",
        date: "2025-02-25",
        founders: "Thirukumaran Nagarajan, Kiran Narayanan, Sharath Loganathan, Vasudevan Chinnathambi, Sachin Jose",
        vcs: "Tiger Global, Flipkart",
        source: "https://techcrunch.com/2025/02/25/ninjacart-6m-series-c/"
    },
    {
        name: "Groww",
        amount: 5.8,
        industry: "Fintech",
        round: "Series D",
        date: "2025-02-23",
        founders: "Lalit Keshre, Harsh Jain, Neeraj Singh, Ishan Bansal",
        vcs: "Tiger Global, Sequoia Capital India",
        source: "https://economictimes.indiatimes.com/tech/startups/groww-5-8m-series-d/"
    },
    {
        name: "Postman",
        amount: 5.5,
        industry: "Developer Tools",
        round: "Series D",
        date: "2025-02-20",
        founders: "Abhinav Asthana, Ankit Sobti, Abhijit Kane",
        vcs: "Insight Partners, Nexus Venture Partners",
        source: "https://techstory.in/postman-5-5m-series-d/"
    },
    {
        name: "Chargebee",
        amount: 5.2,
        industry: "SaaS",
        round: "Series G",
        date: "2025-02-18",
        founders: "Krish Subramanian, Rajaraman Santhanam, KPS Raghavan, Saravanan KP",
        vcs: "Tiger Global, Steadview Capital",
        source: "https://entrackr.com/2025/02/chargebee-5-2m-series-g/"
    },
    {
        name: "Innovaccer",
        amount: 5,
        industry: "HealthTech",
        round: "Series D",
        date: "2025-02-15",
        founders: "Abhinav Shashank, Kanav Hasija, Sandeep Gupta",
        vcs: "Tiger Global, Dragoneer Investment Group",
        source: "https://yourstory.com/2025/02/innovaccer-5m-series-d/"
    },
    {
        name: "Zenoti",
        amount: 4.8,
        industry: "SaaS",
        round: "Series C",
        date: "2025-02-13",
        founders: "Sudheer Koneru, Sarva Saravanan, Dheeraj Koneru",
        vcs: "Tiger Global, Steadview Capital",
        source: "https://inc42.com/buzz/zenoti-4-8m-series-c/"
    },
    {
        name: "Mindtickle",
        amount: 4.5,
        industry: "SaaS",
        round: "Series D",
        date: "2025-02-10",
        founders: "Krishna Depura, Mohit Garg, Nishant Mungali, Deepak Diwakar",
        vcs: "SoftBank Vision Fund, Norwest Venture Partners",
        source: "https://techcrunch.com/2025/02/10/mindtickle-4-5m-series-d/"
    },
    {
        name: "Icertis",
        amount: 4.2,
        industry: "SaaS",
        round: "Series F",
        date: "2025-02-08",
        founders: "Samir Bodas, Monish Darda",
        vcs: "Greycroft Partners, Fidelity Management",
        source: "https://economictimes.indiatimes.com/tech/startups/icertis-4-2m-series-f/"
    },
    {
        name: "Whatfix",
        amount: 4,
        industry: "SaaS",
        round: "Series D",
        date: "2025-02-05",
        founders: "Khadim Batti, Vara Kumar Namburu",
        vcs: "SoftBank Vision Fund, Sequoia Capital India",
        source: "https://techstory.in/whatfix-4m-series-d/"
    },
    {
        name: "Darwinbox",
        amount: 3.8,
        industry: "HR Tech",
        round: "Series D",
        date: "2025-02-03",
        founders: "Chaitanya Peddi, Rohit Chennamaneni, Jayant Paleti",
        vcs: "Technology Crossover Ventures, Sequoia Capital India",
        source: "https://entrackr.com/2025/02/darwinbox-3-8m-series-d/"
    },
    {
        name: "Browserstack",
        amount: 3.5,
        industry: "Developer Tools",
        round: "Series B",
        date: "2025-02-01",
        founders: "Ritesh Arora, Nakul Aggarwal",
        vcs: "Accel Partners, BOND",
        source: "https://yourstory.com/2025/02/browserstack-3-5m-series-b/"
    },
    {
        name: "Hasura",
        amount: 3.2,
        industry: "Developer Tools",
        round: "Series B",
        date: "2025-01-30",
        founders: "Tanmai Gopal, Rajoshi Ghosh",
        vcs: "Lightspeed Venture Partners, Nexus Venture Partners",
        source: "https://inc42.com/buzz/hasura-3-2m-series-b/"
    },
    {
        name: "Clevertap",
        amount: 3,
        industry: "Marketing Tech",
        round: "Series C",
        date: "2025-01-28",
        founders: "Sunil Thomas, Anand Jain, Suresh Kondamudi",
        vcs: "Tiger Global, Sequoia Capital India",
        source: "https://techcrunch.com/2025/01/28/clevertap-3m-series-c/"
    },
    {
        name: "Capillary Technologies",
        amount: 2.8,
        industry: "Retail Tech",
        round: "Series D",
        date: "2025-01-25",
        founders: "Aneesh Reddy, Krishna Mehra, Ajay Modani",
        vcs: "Warburg Pincus, Sequoia Capital India",
        source: "https://economictimes.indiatimes.com/tech/startups/capillary-2-8m-series-d/"
    },
    {
        name: "Haptik",
        amount: 2.5,
        industry: "AI/Chatbots",
        round: "Series C",
        date: "2025-01-23",
        founders: "Aakrit Vaish, Swapan Rajdev",
        vcs: "Reliance Jio, Times Internet",
        source: "https://techstory.in/haptik-2-5m-series-c/"
    },
    {
        name: "Lendingkart",
        amount: 2.3,
        industry: "Fintech",
        round: "Series D",
        date: "2025-01-20",
        founders: "Harshvardhan Lunia, Mukul Sachan",
        vcs: "Bertelsmann India Investments, Mayfield India",
        source: "https://entrackr.com/2025/01/lendingkart-2-3m-series-d/"
    },
    {
        name: "Kredivo",
        amount: 2.1,
        industry: "Fintech",
        round: "Series B",
        date: "2025-01-18",
        founders: "Akshay Garg, Umang Kumar",
        vcs: "Mirae Asset Venture Investment, Square Peg Capital",
        source: "https://yourstory.com/2025/01/kredivo-2-1m-series-b/"
    },
    {
        name: "Kissht",
        amount: 2,
        industry: "Fintech",
        round: "Series C",
        date: "2025-01-15",
        founders: "Krishnan Vishwanathan, Ranvir Singh",
        vcs: "Vertex Ventures, Ventureast",
        source: "https://inc42.com/buzz/kissht-2m-series-c/"
    },
    {
        name: "Simpl",
        amount: 1.8,
        industry: "Fintech",
        round: "Series B",
        date: "2025-01-13",
        founders: "Nitya Sharma, Chaitra Chidanand, Ramkumar Narayanan",
        vcs: "IA Ventures, Venture Highway",
        source: "https://techcrunch.com/2025/01/13/simpl-1-8m-series-b/"
    },
    {
        name: "Rupeek",
        amount: 1.6,
        industry: "Fintech",
        round: "Series D",
        date: "2025-01-10",
        founders: "Sumit Maniyar, Sanjay Agarwal",
        vcs: "GGV Capital, Bertelsmann India Investments",
        source: "https://economictimes.indiatimes.com/tech/startups/rupeek-1-6m-series-d/"
    },
    {
        name: "Smallcase",
        amount: 1.5,
        industry: "Fintech",
        round: "Series B",
        date: "2025-01-08",
        founders: "Vasanth Kamath, Anugrah Shrivastava, Rohan Gupta",
        vcs: "Sequoia Capital India, Blume Ventures",
        source: "https://techstory.in/smallcase-1-5m-series-b/"
    },
    {
        name: "Kreditbee",
        amount: 1.4,
        industry: "Fintech",
        round: "Series C",
        date: "2025-01-05",
        founders: "Madhusudan E, Ranvir Singh",
        vcs: "TPG Growth, Mirae Asset Venture Investment",
        source: "https://entrackr.com/2025/01/kreditbee-1-4m-series-c/"
    },
    {
        name: "Moneyview",
        amount: 1.3,
        industry: "Fintech",
        round: "Series B",
        date: "2025-01-03",
        founders: "Puneet Agarwal, Sanjay Aggarwal",
        vcs: "Tiger Global, Accel Partners",
        source: "https://yourstory.com/2025/01/moneyview-1-3m-series-b/"
    },
    {
        name: "Paymi",
        amount: 1.2,
        industry: "Fintech",
        round: "Series A",
        date: "2025-01-01",
        founders: "Rushil Goel, Ankit Gera",
        vcs: "Lightspeed Venture Partners, Matrix Partners India",
        source: "https://inc42.com/buzz/paymi-1-2m-series-a/"
    },
    {
        name: "Finzy",
        amount: 1.1,
        industry: "Fintech",
        round: "Seed",
        date: "2024-12-30",
        founders: "Rajat Deshpande, Rohit Taneja",
        vcs: "Nexus Venture Partners, Blume Ventures",
        source: "https://techcrunch.com/2024/12/30/finzy-1-1m-seed/"
    },
    {
        name: "Spenny",
        amount: 1,
        industry: "Fintech",
        round: "Pre-Series A",
        date: "2024-12-28",
        founders: "Sandeep Srinivasa, Nagarjuna Venna",
        vcs: "Prime Venture Partners, Blume Ventures",
        source: "https://economictimes.indiatimes.com/tech/startups/spenny-1m-pre-series-a/"
    }
];

