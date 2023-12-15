import React, { useState } from "react";
import "../pages/register.css";
import FormInput from "../formInput";
//import Select from "react-select";

const Register = () => {
  const [name, setName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [email, setEmail] = useState("");
  const [dept, setDept] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [aadharnumber, setAadharnumber] = useState("");
  const [designation, setDesignation] = useState("");
  const [organization, setOrganization] = useState("");
  const [type, setType] = useState("");
  const [state, setState] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitted, setisSubmitted] = useState(false);
  const [passwordsMatchError, setPasswordsMatchError] = useState(true);
  const [selectedCity, setSelectedCity] = useState("");

  //
  const [registrationStatus, setRegistrationStatus] = useState("");

  // const handleInputChange = (event) => {
  //   setName(event.target.value);
  // };

  const ch_option2 = (event) => {
    setSelectedCity(event.target.value);
  };
  // Function which will validate the input data whenever submit button is clicked.
  const Assam = [
    // Districts in Assam
    "Select City",
    "Baksa",
    "Barpeta",
    "Biswanath",
    "Bongaigaon",
    "Cachar",
    "Charaideo",
    "Chirang",
    "Darrang",
    "Dhemaji",
    "Dhubri",
    "Dibrugarh",
    "Dima Hasao",
    "Goalpara",
    "Golaghat",
    "Hailakandi",
    "Hojai",
    "Jorhat",
    "Kamrup",
    "Kamrup Metropolitan",
    "Karbi Anglong",
    "Karimganj",
    "Kokrajhar",
    "Lakhimpur",
    "Majuli",
    "Morigaon",
    "Nagaon",
    "Nalbari",
    "Sivasagar",
    "Sonitpur",
    "South Salmara-Mankachar",
    "Tinsukia",
    "Udalguri",
    "West Karbi Anglong",
  ];
  const Andhra = [
    // Districts in Andhra Pradesh
    "Select City",
    "Anantapur",
    "Chittoor",
    "East Godavari",
    "Guntur",
    "Kadapa",
    "Krishna",
    "Kurnool",
    "Nellore",
    "Prakasam",
    "Srikakulam",
    "Visakhapatnam",
    "Vizianagaram",
    "West Godavari",
  ];
  const Arunachal = [
    // Districts in Arunachal Pradesh
    "Select City",
    "Tawang",
    "West Kameng",
    "East Kameng",
    "Papum Pare",
    "Kurung Kumey",
    "Kra Daadi",
    "Lower Subansiri",
    "Upper Subansiri",
    "West Siang",
    "East Siang",
    "Siang",
    "Upper Siang",
    "Lower Siang",
    "Lower Dibang Valley",
    "Dibang Valley",
    "Anjaw",
    "Lohit",
    "Namsai",
    "Changlang",
    "Tirap",
    "Longding",
  ];
  const Bihar = [
    "Select City",
    "Araria",
    "Arwal",
    "Aurangabad",
    "Banka",
    "Begusarai",
    "Bhagalpur",
    "Bhojpur",
    "Buxar",
    "Darbhanga",
    "East Champaran (Motihari)",
    "Gaya",
    "Gopalganj",
    "Jamui",
    "Jehanabad",
    "Kaimur (Bhabua)",
    "Katihar",
    "Khagaria",
    "Kishanganj",
    "Lakhisarai",
    "Madhepura",
    "Madhubani",
    "Munger (Monghyr)",
    "Muzaffarpur",
    "Nalanda",
    "Nawada",
    "Patna",
    "Purnia (Purnea)",
    "Rohtas",
    "Saharsa",
    "Samastipur",
    "Saran",
    "Sheikhpura",
    "Sheohar",
    "Sitamarhi",
    "Siwan",
    "Supaul",
    "Vaishali",
    "West Champaran",
  ];
  const Chhattisgarh = [
    "Select City",
    "Balod",
    "Baloda Bazar",
    "Balrampur",
    "Bastar",
    "Bemetara",
    "Bijapur",
    "Bilaspur",
    "Dantewada",
    "Dhamtari",
    "Durg",
    "Gariaband",
    "Janjgir-Champa",
    "Jashpur",
    "Kabirdham (Kawardha)",
    "Kanker",
    "Kondagaon",
    "Korba",
    "Koriya",
    "Mahasamund",
    "Mungeli",
    "Narayanpur",
    "Raigarh",
    "Raipur",
    "Rajnandgaon",
    "Sukma",
    "Surajpur",
    "Surguja",
  ];
  const Goa = ["Select City", "North Goa", "South Goa"];
  const Gujarat = [
    "Select City",
    "Ahmedabad",
    "Amreli",
    "Anand",
    "Aravalli",
    "Banaskantha",
    "Bharuch",
    "Bhavnagar",
    "Botad",
    "Chhota Udaipur",
    "Dahod",
    "Dang",
    "Devbhoomi Dwarka",
    "Gandhinagar",
    "Gir Somnath",
    "Jamnagar",
    "Junagadh",
    "Kutch",
    "Kheda",
    "Mahisagar",
    "Mehsana",
    "Morbi",
    "Narmada",
    "Navsari",
    "Panchmahal",
    "Patan",
    "Porbandar",
    "Rajkot",
    "Sabarkantha",
    "Surat",
    "Surendranagar",
    "Tapi",
    "Vadodara",
    "Valsad",
  ];

  const Haryana = [
    "Select City",
    "Ambala",
    "Bhiwani",
    "Charkhi Dadri",
    "Faridabad",
    "Fatehabad",
    "Gurugram",
    "Hisar",
    "Jhajjar",
    "Jind",
    "Kaithal",
    "Karnal",
    "Kurukshetra",
    "Mahendragarh",
    "Nuh",
    "Palwal",
    "Panchkula",
    "Panipat",
    "Rewari",
    "Rohtak",
    "Sirsa",
    "Sonipat",
    "Yamunanagar",
  ];

  const HimachalPradesh = [
    "Select City",
    "Bilaspur",
    "Chamba",
    "Hamirpur",
    "Kangra",
    "Kinnaur",
    "Kullu",
    "Lahaul and Spiti",
    "Mandi",
    "Shimla",
    "Sirmaur",
    "Solan",
    "Una",
  ];

  const Jharkhand = [
    "Select City",
    "Bokaro",
    "Chatra",
    "Deoghar",
    "Dhanbad",
    "Dumka",
    "East Singhbhum",
    "Garhwa",
    "Giridih",
    "Godda",
    "Gumla",
    "Hazaribagh",
    "Jamtara",
    "Khunti",
    "Koderma",
    "Latehar",
    "Lohardaga",
    "Pakur",
    "Palamu",
    "Ramgarh",
    "Ranchi",
    "Sahibganj",
    "Seraikela Kharsawan",
    "Simdega",
    "West Singhbhum",
  ];

  const Karnataka = [
    "Select City",
    "Bagalkot",
    "Ballari (Bellary)",
    "Belagavi (Belgaum)",
    "Bengaluru (Bangalore) Rural",
    "Bengaluru (Bangalore) Urban",
    "Bidar",
    "Chamarajanagar",
    "Chikballapur",
    "Chikkamagaluru (Chikmagalur)",
    "Chitradurga",
    "Dakshina Kannada",
    "Davangere",
    "Dharwad",
    "Gadag",
    "Hassan",
    "Haveri",
    "Kalaburagi (Gulbarga)",
    "Kodagu",
    "Kolar",
    "Koppal",
    "Mandya",
    "Mysuru (Mysore)",
    "Raichur",
    "Ramanagara",
    "Shivamogga (Shimoga)",
    "Tumakuru (Tumkur)",
    "Udupi",
    "Uttara Kannada (Karwar)",
    "Vijayapura (Bijapur)",
    "Yadgir",
  ];

  const kerala = [
    "Select City",
    "Alappuzha",
    "Ernakulam",
    "Idukki",
    "Kannur",
    "Kasaragod",
    "Kollam",
    "Kottayam",
    "Kozhikode",
    "Malappuram",
    "Palakkad",
    "Pathanamthitta",
    "Thiruvananthapuram",
    "Thrissur",
    "Wayanad",
  ];

  const MadhyaPradesh = [
    "Select City",
    "Agar Malwa",
    "Alirajpur",
    "Anuppur",
    "Ashoknagar",
    "Balaghat",
    "Barwani",
    "Betul",
    "Bhind",
    "Bhopal",
    "Burhanpur",
    "Chhatarpur",
    "Chhindwara",
    "Damoh",
    "Datia",
    "Dewas",
    "Dhar",
    "Dindori",
    "Guna",
    "Gwalior",
    "Harda",
    "Hoshangabad",
    "Indore",
    "Jabalpur",
    "Jhabua",
    "Katni",
    "Khandwa",
    "Khargone",
    "Mandla",
    "Mandsaur",
    "Morena",
    "Narsinghpur",
    "Neemuch",
    "Panna",
    "Raisen",
    "Rajgarh",
    "Ratlam",
    "Rewa",
    "Sagar",
    "Satna",
    "Sehore",
    "Seoni",
    "Shahdol",
    "Shajapur",
    "Sheopur",
    "Shivpuri",
    "Sidhi",
    "Singrauli",
    "Tikamgarh",
    "Ujjain",
    "Umaria",
    "Vidisha",
  ];

  const Maharashtra = [
    "Select City",
    "Ahmednagar",
    "Akola",
    "Amravati",
    "Aurangabad",
    "Beed",
    "Bhandara",
    "Buldhana",
    "Chandrapur",
    "Dhule",
    "Gadchiroli",
    "Gondia",
    "Hingoli",
    "Jalgaon",
    "Jalna",
    "Kolhapur",
    "Latur",
    "Mumbai City",
    "Mumbai Suburban",
    "Nagpur",
    "Nanded",
    "Nandurbar",
    "Nashik",
    "Osmanabad",
    "Palghar",
    "Parbhani",
    "Pune",
    "Raigad",
    "Ratnagiri",
    "Sangli",
    "Satara",
    "Sindhudurg",
    "Solapur",
    "Thane",
    "Wardha",
    "Washim",
    "Yavatmal",
  ];

  const Manipur = [
    "Select City",
    "Bishnupur",
    "Chandel",
    "Churachandpur",
    "Imphal East",
    "Imphal West",
    "Jiribam",
    "Kakching",
    "Kamjong",
    "Kangpokpi",
    "Noney",
    "Pherzawl",
    "Senapati",
    "Tamenglong",
    "Tengnoupal",
    "Thoubal",
    "Ukhrul",
  ];

  const Meghalaya = [
    "Select City",
    "East Garo Hills",
    "East Jaintia Hills",
    "East Khasi Hills",
    "North Garo Hills",
    "Ri-Bhoi",
    "South Garo Hills",
    "South West Garo Hills",
    "South West Khasi Hills",
    "West Garo Hills",
    "West Jaintia Hills",
    "West Khasi Hills",
  ];

  const Mizoram = [
    "Select City",
    "Aizawl",
    "Champhai",
    "Hnahthial",
    "Khawzawl",
    "Kolasib",
    "Lawngtlai",
    "Lunglei",
    "Mamit",
    "Saiha",
    "Saitual",
    "Serchhip",
  ];

  const Nagaland = [
    "Select City",
    "Dimapur",
    "Kiphire",
    "Kohima",
    "Longleng",
    "Mokokchung",
    "Mon",
    "Peren",
    "Phek",
    "Tuensang",
    "Wokha",
    "Zunheboto",
  ];

  const Odisha = [
    "Select City",
    "Angul",
    "Balangir",
    "Balasore",
    "Bargarh",
    "Bhadrak",
    "Boudh",
    "Cuttack",
    "Deogarh",
    "Dhenkanal",
    "Gajapati",
    "Ganjam",
    "Jagatsinghapur",
    "Jajpur",
    "Jharsuguda",
    "Kalahandi",
    "Kandhamal",
    "Kendrapara",
    "Kendujhar (Keonjhar)",
    "Khordha",
    "Koraput",
    "Malkangiri",
    "Mayurbhanj",
    "Nabarangpur",
    "Nayagarh",
    "Nuapada",
    "Puri",
    "Rayagada",
    "Sambalpur",
    "Sonepur",
    "Sundargarh",
  ];

  const Punjab = [
    "Select City",
    "Amritsar",
    "Barnala",
    "Bathinda",
    "Faridkot",
    "Fatehgarh Sahib",
    "Fazilka",
    "Ferozepur",
    "Gurdaspur",
    "Hoshiarpur",
    "Jalandhar",
    "Kapurthala",
    "Ludhiana",
    "Mansa",
    "Moga",
    "Pathankot",
    "Patiala",
    "Rupnagar",
    "Sahibzada Ajit Singh Nagar",
    "Sangrur",
    "Shahid Bhagat Singh Nagar",
    "Sri Muktsar Sahib",
    "Tarn Taran",
  ];

  const Rajasthan = [
    "Select City",
    "Ajmer",
    "Alwar",
    "Banswara",
    "Baran",
    "Barmer",
    "Bharatpur",
    "Bhilwara",
    "Bikaner",
    "Bundi",
    "Chittorgarh",
    "Churu",
    "Dausa",
    "Dholpur",
    "Dungarpur",
    "Hanumangarh",
    "Jaipur",
    "Jaisalmer",
    "Jalore",
    "Jhalawar",
    "Jhunjhunu",
    "Jodhpur",
    "Karauli",
    "Kota",
    "Nagaur",
    "Pali",
    "Pratapgarh",
    "Rajsamand",
    "Sawai Madhopur",
    "Sikar",
    "Sirohi",
    "Sri Ganganagar",
    "Tonk",
    "Udaipur",
  ];

  const Sikkim = [
    "Select City",
    "East Sikkim",
    "North Sikkim",
    "South Sikkim",
    "West Sikkim",
  ];

  const TamilNadu = [
    "Select City",
    "Select City",
    "Ariyalur",
    "Chengalpattu",
    "Chennai",
    "Coimbatore",
    "Cuddalore",
    "Dharmapuri",
    "Dindigul",
    "Erode",
    "Kallakurichi",
    "Kanchipuram",
    "Kanyakumari",
    "Karur",
    "Krishnagiri",
    "Madurai",
    "Nagapattinam",
    "Namakkal",
    "Nilgiris",
    "Perambalur",
    "Pudukkottai",
    "Ramanathapuram",
    "Ranipet",
    "Salem",
    "Sivaganga",
    "Tenkasi",
    "Thanjavur",
    "Theni",
    "Thoothukudi",
    "Tiruchirappalli",
    "Tirunelveli",
    "Tirupattur",
    "Tiruppur",
    "Tiruvallur",
    "Tiruvannamalai",
    "Tiruvarur",
    "Vellore",
    "Viluppuram",
    "Virudhunagar",
    // Add more districts if needed
  ];

  const Telangana = [
    "Select City",
    "Adilabad",
    "Bhadradri Kothagudem",
    "Hyderabad",
    "Jagtial",
    "Jangaon",
    "Jayashankar Bhupalpally",
    "Jogulamba Gadwal",
    "Kamareddy",
    "Karimnagar",
    "Khammam",
    "Komaram Bheem Asifabad",
    "Mahabubabad",
    "Mahabubnagar",
    "Mancherial",
    "Medak",
    "Medchal-Malkajgiri",
    "Mulugu",
    "Nagarkurnool",
    "Nalgonda",
    "Nirmal",
    "Nizamabad",
    "Peddapalli",
    "Rajanna Sircilla",
    "Rangareddy",
    "Sangareddy",
    "Siddipet",
    "Suryapet",
    "Vikarabad",
    "Wanaparthy",
    "Warangal Rural",
    "Warangal Urban",
    "Yadadri Bhuvanagiri",
  ];

  const Tripura = [
    "Select City",
    "Dhalai",
    "Gomati",
    "Khowai",
    "North Tripura",
    "Sipahijala",
    "South Tripura",
    "Unakoti",
    "West Tripura",
  ];

  const UttarPradesh = [
    "Select City",
    "Agra",
    "Aligarh",
    "Ambedkar Nagar",
    "Amethi",
    "Amroha",
    "Auraiya",
    "Azamgarh",
    "Baghpat",
    "Bahraich",
    "Ballia",
    "Balrampur",
    "Banda",
    "Barabanki",
    "Bareilly",
    "Basti",
    "Bhadohi",
    "Bijnor",
    "Budaun",
    "Bulandshahr",
    "Chandauli",
    "Chitrakoot",
    "Deoria",
    "Etah",
    "Etawah",
    "Faizabad",
    "Farrukhabad",
    "Fatehpur",
    "Firozabad",
    "Gautam Buddh Nagar",
    "Ghaziabad",
    "Ghazipur",
    "Gonda",
    "Gorakhpur",
    "Hamirpur",
    "Hapur",
    "Hardoi",
    "Hathras",
    "Jalaun",
    "Jaunpur",
    "Jhansi",
    "Kannauj",
    "Kanpur Dehat",
    "Kanpur Nagar",
    "Kasganj",
    "Kaushambi",
    "Kushinagar",
    "Lakhimpur Kheri",
    "Lalitpur",
    "Lucknow",
    "Maharajganj",
    "Mahoba",
    "Mainpuri",
    "Mathura",
    "Mau",
    "Meerut",
    "Mirzapur",
    "Moradabad",
    "Muzaffarnagar",
    "Pilibhit",
    "Pratapgarh",
    "Prayagraj",
    "Raebareli",
    "Rampur",
    "Saharanpur",
    "Sambhal",
    "Sant Kabir Nagar",
    "Shahjahanpur",
    "Shamli",
    "Shrawasti",
    "Siddharthnagar",
    "Sitapur",
    "Sonbhadra",
    "Sultanpur",
    "Unnao",
    "Varanasi",
  ];

  const Uttarakhand = [
    "Select City",
    "Almora",
    "Bageshwar",
    "Chamoli",
    "Champawat",
    "Dehradun",
    "Haridwar",
    "Nainital",
    "Pauri Garhwal",
    "Pithoragarh",
    "Rudraprayag",
    "Tehri Garhwal",
    "Udham Singh Nagar",
    "Uttarkashi",
  ];

  const WestBengal = [
    "Select City",
    "Alipurduar",
    "Bankura",
    "Birbhum",
    "Cooch Behar",
    "Dakshin Dinajpur",
    "Darjeeling",
    "Hooghly",
    "Howrah",
    "Jalpaiguri",
    "Jhargram",
    "Kalimpong",
    "Kolkata",
    "Malda",
    "Murshidabad",
    "Nadia",
    "North 24 Parganas",
    "Paschim Bardhaman",
    "Paschim Medinipur",
    "Purba Bardhaman",
    "Purba Medinipur",
    "Purulia",
    "South 24 Parganas",
    "Uttar Dinajpur",
  ];

  const AndamanNicobar = [
    "Select City",
    "Nicobar",
    "North and Middle Andaman",
    "South Andaman",
  ];

  const Chandigarh = ["Select City", "Chandigarh"];

  const DadraNagarDamanDiu = [
    "Select City",
    "Dadra and Nagar Haveli",
    "Daman",
    "Diu",
  ];

  const Delhi = [
    "Select City",
    "Central Delhi",
    "East Delhi",
    "New Delhi",
    "North Delhi",
    "North East Delhi",
    "North West Delhi",
    "Shahdara",
    "South Delhi",
    "South East Delhi",
    "South West Delhi",
    "West Delhi",
  ];

  const JammuKashmir = [
    "Select City",
    "Anantnag",
    "Bandipora",
    "Baramulla",
    "Budgam",
    "Doda",
    "Ganderbal",
    "Jammu",
    "Kathua",
    "Kishtwar",
    "Kulgam",
    "Kupwara",
    "Poonch",
    "Pulwama",
    "Rajouri",
    "Ramban",
    "Reasi",
    "Samba",
    "Shopian",
    "Srinagar",
    "Udhampur",
  ];

  const Ladakh = ["Select City", "Kargil", "Leh"];

  const Lakshadweep = [
    "Select City",
    "Agatti",
    "Amini",
    "Andrott",
    "Bitra",
    "Chetlat",
    "Kadmath",
    "Kalpeni",
    "Kavaratti",
    "Kiltan",
    "Minicoy",
  ];

  const Puducherry = ["Select City", "Karaikal", "Mahe", "Puducherry", "Yanam"];

  let type1 = null;
  let options = null;
  if (state === "Andhra Pradesh") {
    type1 = Andhra;
  } else if (state === "Arunachal Pradesh") {
    type1 = Arunachal;
  } else if (state === "Assam") {
    type1 = Assam;
  } else if (state === "Bihar") {
    type1 = Bihar;
  } else if (state === "Chhattisgarh") {
    type1 = Chhattisgarh;
  } else if (state === "Goa") {
    type1 = Goa;
  } else if (state === "Gujarat") {
    type1 = Gujarat;
  } else if (state === "Haryana") {
    type1 = Haryana;
  } else if (state === "Himachal Pradesh") {
    type1 = HimachalPradesh;
  } else if (state === "Jharkhand") {
    type1 = Jharkhand;
  } else if (state === "Karnataka") {
    type1 = Karnataka;
  } else if (state === "Kerala") {
    type1 = kerala;
  } else if (state === "Madhya Pradesh") {
    type1 = MadhyaPradesh;
  } else if (state === "Maharashtra") {
    type1 = Maharashtra;
  } else if (state === "Manipur") {
    type1 = Manipur;
  } else if (state === "Meghalaya") {
    type1 = Meghalaya;
  } else if (state === "Mizoram") {
    type1 = Mizoram;
  } else if (state === "Nagaland") {
    type1 = Nagaland;
  } else if (state === "Odisha") {
    type1 = Odisha;
  } else if (state === "Punjab") {
    type1 = Punjab;
  } else if (state === "Rajasthan") {
    type1 = Rajasthan;
  } else if (state === "Sikkim") {
    type1 = Sikkim;
  } else if (state === "Tamil Nadu") {
    type1 = TamilNadu;
  } else if (state === "Telangana") {
    type1 = Telangana;
  } else if (state === "Tripura") {
    type1 = Tripura;
  } else if (state === "Uttar Pradesh") {
    type1 = UttarPradesh;
  } else if (state === "Uttarakhand") {
    type1 = Uttarakhand;
  } else if (state === "West Bengal") {
    type1 = WestBengal;
  } else if (state === "Andaman and Nicobar Islands") {
    type1 = AndamanNicobar;
  } else if (state === "Chandigarh") {
    type1 = Chandigarh;
  } else if (state === "Dadra and Nagar Haveli and Daman & Diu") {
    type1 = DadraNagarDamanDiu;
  } else if (state === "Delhi") {
    type1 = Delhi;
  } else if (state === "Jammu and Kashmir") {
    type1 = JammuKashmir;
  } else if (state === "Ladakh") {
    type1 = Ladakh;
  } else if (state === "Lakshadweep") {
    type1 = Lakshadweep;
  } else if (state === "Puducherry") {
    type1 = Puducherry;
  }

  if (type1) {
    options = type1.map((e1) => <option key={e1}>{e1}</option>);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    e.preventDefault();
    if (!type) {
      setRegistrationStatus("Please select a role");
      return;
    }
    if (password === confirmPassword) {
      setisSubmitted(true);
    } else {
      setPasswordsMatchError("Passwords do not match. Please try again.");
    }
    fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        fatherName,
        email,
        dept,
        address,
        phoneNumber,
        password,
        aadharnumber,
        designation,
        organization,
        type,
        state,
        role,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "ok") {
          setRegistrationStatus("Registration Successful");
        } else {
          setRegistrationStatus("Something went wrong");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const RenderForm1 = (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <div id="input">
          <div id="input1">
            <FormInput
              name="name"
              type="text"
              placeholder="Name"
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div id="input2">
            <FormInput
              name="email"
              type="email"
              placeholder="Email"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
              required
            />
          </div>
        </div>

        {/* State */}
        <div id="input">
          <div className="formInput">
            <label htmlFor="state">State</label>
            <select
              name="state"
              id="state"
              value={state}
              onChange={(e) => setState(e.target.value)}
              required
            >
              <option value="">Select State</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="Chhattisgarh">Chhattisgarh</option>
              <option value="Goa">Goa</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Haryana">Haryana</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Kerala">Kerala</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Manipur">Manipur</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Mizoram">Mizoram</option>
              <option value="Nagaland">Nagaland</option>
              <option value="Odisha">Odisha</option>
              <option value="Punjab">Punjab</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Sikkim">Sikkim</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Telangana">Telangana</option>
              <option value="Tripura">Tripura</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Uttarakhand">Uttarakhand</option>
              <option value="Andaman and Nicobar Islands">
                Andaman and Nicobar Islands
              </option>
              <option value="Chandigarh">Chandigarh</option>
              <option value="Delhi">Delhi</option>
              <option value="Dadra and Nagar Haveli and Daman & Diu">
                Dadra and Nagar Haveli and Daman & Diu
              </option>
              <option value="Jammu & Kashmir">Jammu & Kashmir</option>
              <option value="Lakshadweep">Lakshadweep</option>
              <option value="Ladakh">Ladakh</option>
              <option value="Puducherry">Puducherry</option>
              {/* Add state options */}
            </select>
          </div>
          {/* City */}
          <div className="formInput">
            <label>City</label>

            <select onChange={ch_option2}>{options}</select>
          </div>
        </div>
        {/* Usertype */}
        <div className="formInput">
          <label htmlFor="type">Usertype </label>
          <select
            name="type"
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
          >
            <option value="">Select Usertype</option>
            <option value="Farmer">Farmer</option>
            <option value="Admin">Admin</option>
            <option value="Schemeofficer">Schemeofficer</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <FormInput
          name="password"
          type="password"
          placeholder="Password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          pattern="^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$"
          errorMessage="Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!"
          required
        />
        <FormInput
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          label="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        {passwordsMatchError && (
          <p style={{ color: "red" }}>{passwordsMatchError}</p>
        )}
        <button type="submit">Next</button>
      </form>
    </div>
  );

  {
    /* Admin page*/
  }
  const Adminform = (
    <div className="app">
      <form>
        <h1>Admin-Register</h1>
        <div id="input">
          <div id="input1">
            <FormInput
              name="name"
              type="text"
              placeholder="Name"
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <FormInput
              name="aadharnumber"
              type="tel"
              placeholder="ex:9534562312"
              label="Aadharnumber"
              value={aadharnumber}
              onChange={(e) => setAadharnumber(e.target.value)}
              maxLength={12}
              pattern="^\d{12}$"
              title="Please enter a valid 12-digit Adhar Number"
              required
            />
          </div>
        </div>

        {/* Department */}
        <div id="input">
          <div className="formInput">
            <label htmlFor="dept">Department</label>
            <select
              name="dept"
              id="dept"
              value={dept}
              onChange={(e) => setDept(e.target.value)}
              required
            >
              <option value="">Select Department</option>
              <option value="IT">Information Technology</option>
              <option value="HR">Human Resources</option>
              <option value="Finance">Finance</option>
              {/* Add more options as needed */}
            </select>
          </div>

          <div>
            <FormInput
              name="phoneNumber"
              type="tel"
              placeholder="ex:9534562312"
              label="PhoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              maxLength={10}
              minLength={10}
              required
            />
          </div>
        </div>

        {/* Designation */}
        <div id="input">
          <div className="formInput">
            <label htmlFor="designation">Designation</label>
            <select
              name="designation"
              id="designation"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              required
            >
              <option value="">Select Designation </option>
              <option value="Field Officers">Field Officers</option>
              <option value="Program Managers">Program Managers</option>
              <option value="Deputy Director">Deputy Director</option>
              <option value="Director General">Director General</option>
              <option value="Deputy Secretary">Deputy Secretary</option>
              <option value="Secretary">Secretary</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div>
            <FormInput
              name="role"
              type="text"
              placeholder="e.g., Project Officer, Nodal Officer, etc."
              label="Role in Scheme"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="formInput">
          <div>
            <label htmlFor="textArea">Address</label>
            <textarea
              id="textArea"
              className="custom-textarea"
              placeholder="Enter your Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
  const Farmerform = (
    <div className="app">
      <form>
        <h1>Farmer Register </h1>
        <div>
          <FormInput
            name="name"
            type="text"
            placeholder="Name"
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        {/* Organization */}

        <div>
          <FormInput
            name="fatherName"
            type="text"
            placeholder="e.g., Project Officer, Nodal Officer, etc."
            label="Father's Name/ Husband's Name"
            value={fatherName}
            onChange={(e) => setFatherName(e.target.value)}
            required
          />
        </div>
        <div>
          <FormInput
            name="aadharnumber"
            type="tel"
            placeholder="ex:9534562312"
            label="Aadharnumber"
            value={aadharnumber}
            onChange={(e) => setAadharnumber(e.target.value)}
            maxLength={12}
            pattern="^\d{12}$"
            title="Please enter a valid 12-digit Adhar Number"
            required
          />
        </div>
        <div>
          <FormInput
            name="phoneNumber"
            type="tel"
            placeholder="ex:9534562312"
            label="PhoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            maxLength={10}
            minLength={10}
            required
          />
        </div>

        <div className="formInput">
          <div>
            <label htmlFor="textArea">Address</label>
            <textarea
              id="textArea"
              className="custom-textarea"
              placeholder="Enter your Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );

  const Officerform = (
    <div className="app">
      <form>
        <h1>SchemeOfficer-Register</h1>
        <div id="input">
          <div id="input1">
            <FormInput
              name="name"
              type="text"
              placeholder="Name"
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <FormInput
              name="aadharnumber"
              type="tel"
              placeholder="ex:9534562312"
              label="Aadharnumber"
              value={aadharnumber}
              onChange={(e) => setAadharnumber(e.target.value)}
              maxLength={12}
              pattern="^\d{12}$"
              title="Please enter a valid 12-digit Adhar Number"
              required
            />
          </div>
        </div>

        {/* Organization */}
        <div id="input">
          <div id="input1">
            <FormInput
              name="organization"
              type="text"
              placeholder="Organization Name"
              label="Organization Name"
              value={organization}
              onChange={(e) => setOrganization(e.target.value)}
              required
            />
          </div>

          <div>
            <FormInput
              name="phoneNumber"
              type="tel"
              placeholder="ex:9534562312"
              label="PhoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              maxLength={10}
              minLength={10}
              required
            />
          </div>
        </div>

        {/* Designation */}
        <div id="input">
          <div className="formInput">
            <label htmlFor="designation">Designation</label>
            <select
              name="designation"
              id="designation"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              required
            >
              <option value="">Select Designation </option>
              <option value="Field Officers">Field Officers</option>
              <option value="Program Managers">Program Managers</option>
              <option value="Deputy Director">Deputy Director</option>
              <option value="Director General">Director General</option>
              <option value="Deputy Secretary">Deputy Secretary</option>
              <option value="Secretary">Secretary</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div>
            <FormInput
              name="role"
              type="text"
              placeholder="e.g., Project Officer, Nodal Officer, etc."
              label="Role in Scheme"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="formInput">
          <div>
            <label htmlFor="textArea">Address</label>
            <textarea
              id="textArea"
              className="custom-textarea"
              placeholder="Enter your Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );

  return (
    <div>
      {isSubmitted
        ? type === "Farmer"
          ? Farmerform
          : type === "Admin"
          ? Adminform
          : Officerform
        : RenderForm1}
    </div>
  );
};

export default Register;
