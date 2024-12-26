const employersBlacklistDefault = [
    // Recruitment agencies
    "Aardvark Swift Recruitment",
    "AEJ Consulting Ltd",
    "Accelero",
    "Advanced Resource Managers", // mimic ARM, their website is www.arm.co.uk
    "AgRecruit",
    "AG Talent",
    "Albion Rye Associates",
    "Alex Staff Agency",
    "Alfen",
    "Ampere Recruitment",
    "Ampere Recruitment Ltd",
    "Anson McCade",
    "Areti Group | B Corp™",
    "Astute People",
    "Atlas Recruitment Group Ltd",
    "Austin Fraser",
    "Auto Skills UK",
    "Automation Experts Ltd",
    "Banner Lane",
    "Barclay Meade",
    "Best Selection",
    "Better Placed Ltd - A Sunday Times Top 10 Employer in 2023!",
    "BlueGate Consulting",
    "Blues Point Ltd | IT Recruitment",
    "Bluestream People",
    "Braintrust",
    "Brio Digital",
    "Brio Digital",
    "Brio Digital | Certified B Corp",
    "Burman Recruitment",
    "Burns Sheehan",
    "Calibre8 Recruitment Ltd",
    "Calyptus",
    "Cartisian Recruitment Ltd",
    "Catch Resource Management",
    "CBSbutler",
    "CBSbutler Holdings Limited trading as CBSbutler",
    "Chapman Tate Associates",
    "Church International Limited",
    "Circuit32 Recruitment Solutions Ltd",
    "Complete Security Recruitment",
    "CRG | TEC Recruitment",
    "CXC",
    "Carbon60",
    "Chapman Tate Associates Limited",
    "Chroma Recruitment",
    "Client Server",
    "CodeVerse",
    "Computer Futures",
    "Concept",
    "Concept Resourcing",
    "Copello Global",
    "Corriculo Recruitment",
    "CryptoRecruit",
    "Cubiq Recruitment",
    "Datasource Recruitment",
    "DevFinders",
    "Digital Waffle",
    "Digisourced.",
    "DiverseJobsMatter",
    "Durlston Partners",
    "Dynamic Search Solutions",
    "EVEREC",
    "EVONA",
    "Echelon Partners",
    "Edison Smart®",
    "EdEx - Education Recruitment",
    "Emporia",
    "Endeavour Resourcing Solutions",
    "Energise Recruitment Solutions",
    "Energy Jobline",
    "Engineering Recruitment PDQ",
    "Enterprise Recruitment Ltd",
    "EnviroTech Talent",
    "EPM Scientific",
    "European Tech Recruit",
    "Experis UK",
    "Executive Integrity | B Corp™",
    "Explore Group",
    "Few&Far",
    "First Point Group",
    "Formula Recruitment",
    "Franklin Fitch",
    "Free-Work UK",
    "Fynity",
    "G.R.E. Recruitment Limited",
    "Grey Matter Recruitment",
    "GTS Group Ltd",
    "H Squared Talent",
    "HE Space",
    "Harper Russo",
    "Harrington Starr",
    "Harvey Nash",
    "Hashlist",
    "Hays",
    "Hexwired Recruitment",
    "Hiring People",
    "Holt Executive Ltd",
    "Human Engineering",
    "Humand Talent",
    "Hunter Selection | B Corp™",
    "Huxley",
    "IC Resources",
    "In Technology Group",
    "InfraView - Specialist Cloud & IT Infrastructure Technology Recruitment",
    "Innotech Partners | B Corp™",
    "Innovate",
    "Intake Talent",
    "Intec Select",
    "International recruitment",
    "InterQuest Group",
    "Invecta Group",
    "Itab Recruitment",
    "J&T Recruitment",
    "JAM Recruitment",
    "JP Digital",
    "Kamino Consulting Ltd",
    "Kenect Professional",
    "KBC Technologies Group",
    "KE Technology",
    "Kevin Edward",
    "Kingsgate Recruitment",
    "KO2 Embedded Recruitment Solutions Ltd",
    "KO2 Recruitment",
    "Kingdom People",
    "La Fosse",
    "Laboris Solutions",
    "Latitude Recruitment Ltd",
    "Life Sciences Recruitment",
    "Logic 360 Group",
    "Logik Source",
    "Lorien",
    "LT Harper - Cyber Security Recruitment",
    "Lutine Bell",
    "Macstaff",
    "Maddison Consultants | Building Services Recruitment Specialists",
    "Major Recruitment",
    "Mane Contract Services",
    "Mansell Recruitment Group",
    "Matchtech",
    "Maxwell Bond",
    "Mayflower Recruitment Ltd",
    "Meritus",
    "Michael Page",
    "Mid-Way Supply, Inc.",  // Zenovo Ltd in disguise
    "Morgan Hunt",
    "Morgan McKinley",
    "Morgan Philips Group",
    "Morson Talent",
    "MCS Group | Your Specialist Recruitment Consultancy",
    "NRL",
    "Network Scientific Recruitment",
    "Nigel Frank International",
    "Noir",
    "Norton Blake",
    "Nova Recruitment",
    "Novus Executives",
    "Nursery People",
    "Octagon Group",
    "Oho Group Ltd",
    "Oliver Bernard",
    "Open Select",
    "Opus Recruitment Solutions",
    "Osprey Engineering Solutions",
    "OSS",
    "Owen Daniels",
    "Owen Thomas",
    "Paragon Alpha - Hedge Fund Talent Business",
    "Parkside Recruitment",
    "Peaple Talent",
    "Pearson Carter",
    "People Source Consulting trading as Experis",
    "People Source Consulting Ltd trading as Experis",
    "Piper Maddox",
    "Plan A Digital",
    "Platform Recruitment",
    "Practicus",
    "Proclinical Staffing",
    "Premier Group Recruitment",
    "Premier Technical Recruitment Ltd",
    "Prism Digital",
    "Profectus Recruitment",
    "Professional Technical Limited",
    "Progressive",
    "Progressive Recruitment",
    "Prospectus IT Recruitment",
    "PSB Recruitment",
    "Pyramid Recruitment Ltd",
    "Radius",
    "Radley James",
    "Recruit Engineering",
    "Red King Resourcing",
    "Redline Group Ltd",
    "Redline Group - Specialist Recruitment for Technology & Electronics Companies",
    "RemoteWorker UK",
    "Reqiva",
    "Reviva Resourcing",
    "Resourcing Group",
    "Rise Technical",
    "Right Balance ®",
    "Round-Peg Solutions (RPS)",
    "Russell Tobin",
    "Salt",
    "SER Limited",
    "Sectech Solutions",
    "Selexa Consulting Ltd",
    "SLS Recruitment Specialising in Further Education",
    "SRMD Ltd.",
    "STELLAR360",
    "Scientis Search Ltd",
    "ScoutRec",
    "Searchability®",
    "SearchWorks",
    "Selby Jennings",
    "Senitor Associates",
    "Serve Recruit",
    "Signify Technology",
    "Skilled Careers",
    "Source Technology",
    "Spectrum IT Recruitment",
    "Stirling Warrington",
    "Superstars",
    "Synapri",
    "Talent Chief Ltd",
    "Taylor Reeves Recruitment Ltd",
    "TDA",
    "TEC Partners - Technical Recruitment Specialists",
    "TRIA",
    "TRS Consulting (UK) Ltd",
    "Tact",
    "TalentWave",
    "Tangent International",
    "Team Finder",
    "Tech Connect Group",
    "Tech Pursuit",
    "TECHOHANA",
    "TechShack",
    "Technical Futures Ltd",
    "TekSelect",
    "Templeton & Partners - Innovative & Inclusive Hiring Solutions",
    "Tenth Revolution Group",
    "Teqconnect",
    "The Boothby Group",    // IC Resources in disguise of an insurance company
    "The Channel Recruiter",
    "The Developer Link",
    "The Engage Partnership Recruitment",
    "The MWek Company",
    "Think Specialist Recruitment",
    "TipTopJob",
    "Tris Technology",
    "True Engineers",
    "TrueNorth®",
    "Trust In SODA",
    "Thyme",
    "TRITANIUM",
    "Understanding Recruitment",
    "Understanding Recruitment NFP",
    "Uniting Cloud",
    "US Tech Solutions",
    "Vallum Associates",
    "Venchr",
    "Ventula Consulting",
    "Venture Up",
    "Verso Recruitment",
    "Verso Recruitment Group",
    "Verto People",
    "VirtueTech Recruitment Group",
    "Volition",
    "Walker & Sloan Ltd | Certified B Corp",
    "Walsh Employment",
    "Wave Talent",
    "WHD Consulting Ltd.",
    "Whitehall Resources",
    "WR Engineering Recruiters",
    "WSS Associates",
    "Wynne Interim",
    "Xcede",
    "YO HR Consultancy",
    "YO IT CONSULTING",
    "YOLO Recruitment",
    "Yoh, A Day & Zimmermann Company",
    "YouFound",
    "Your Next Hire",
    "Zazu-Digital",
    "Zenovo",
    "Ziphire HR",
    "asobbi",
    "brabers",
    "dcoded.",
    "eTeam",
    "ea Change",
    "iO Associates - UK/EU",
    "i3",
    "jobs24.co.uk",
    "nGenium",
    "som3 Recruitment",
    "trg.recruitment",
    "4Way Recruitment LTD",
    "pobl.",
    "thisisnoa",
    "Robert Walters",
    "Langham Recruitment",
    "Venatu Recruitment Group",
    "Certus Recruitment Group",
    "Symmetric Recruitment Ltd",
    "Career Renew",
    "Ingenii Search",
    "AndRecruit Group Ltd",

    // communities, job boards etc.
    "Women in Tech UK",
    "Women in Data®",
    "myGwork - LGBTQ+ Business Community",
    "Energy Jobline",
];