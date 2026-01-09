import { NewsItem } from "@/components/NewsCard";
import { Person } from "@/components/PersonCard";
import { Project } from "@/components/ProjectCard";

export const newsItems: NewsItem[] = [
  {
    id: "1",
    date: "2025-09-16",
    title: "Research Alert: Decentralized Water System Dimensions",
    description:
      "Dr. Stoler and colleagues break down three key dimensions of water systems that have important implications for deciding which mix of centralized, decentralized, or hybrid systems will work best for a given community.",
    link: "https://doi.org/10.1002/wat2.70035",
  },
  {
    id: "2",
    date: "2025-06-01",
    title: "Research Alert: The Rise of Hazard Gentrification",
    description:
      "Dr. Stoler led a perspective piece about the increasing prevalence of a very specific form of gentrification that often follows natural hazards and disasters and tends to exploit people during recovery when they are most vulnerable.",
    link: "https://doi.org/10.1016/j.ijdrr.2025.105618",
  },
  {
    id: "3",
    date: "2025-02-12",
    title: "Research Alert: Geospatial Genomics",
    description:
      "Dr. Stoler co-authored a paper about the 'geospatial genomics gap' focusing on how gene-person-place frameworks improve cancer screening and treatment.",
    link: "https://doi.org/10.1200/JCO.24.00751",
  },
  {
    id: "4",
    date: "2024-10-14",
    title: "Research Alert: Insights About Undiagnosed Diseases",
    description:
      "New research discusses challenges in achieving ethnic and racial representation in the Undiagnosed Diseases Network.",
    link: "https://doi.org/10.1002/ajmg.a.63904",
  },
  {
    id: "5",
    date: "2024-06-10",
    title: "Water As 'A Pillar of Modern Society'",
    description:
      "Dr. Stoler discusses infrastructure, policy, and technology challenges related to global water shortages in this University of Miami feature.",
    link: "https://news.miami.edu/stories/2024/06/water-as-a-pillar-of-modern-society.html",
  },
  {
    id: "6",
    date: "2024-05-15",
    title: "Research Alert: Water Insecurity and Mental Health",
    description:
      "New publication examines the relationship between household water insecurity experiences and mental health outcomes across multiple countries.",
    link: "https://doi.org/10.1016/j.socscimed.2024.116825",
  },
  {
    id: "7",
    date: "2024-03-20",
    title: "HWISE-RCN Annual Meeting Success",
    description:
      "The Household Water Insecurity Experiences Research Coordination Network held its annual meeting, bringing together researchers from around the globe.",
  },
  {
    id: "8",
    date: "2024-01-08",
    title: "Research Alert: Climate Migration and Water Access",
    description:
      "New research explores how climate-induced migration affects household water security in receiving communities.",
    link: "https://doi.org/10.1038/s41558-024-01923-x",
  },
  {
    id: "9",
    date: "2023-11-15",
    title: "Research Alert: Packaged Water in Low-Income Settings",
    description:
      "Study examines the role of packaged water as a coping strategy in communities with unreliable water infrastructure.",
    link: "https://doi.org/10.1016/j.watres.2023.120789",
  },
  {
    id: "10",
    date: "2023-09-01",
    title: "Welcome Back New and Returning Students!",
    description:
      "Best wishes to all new and returning students this fall semester. Looking forward to an exciting academic year ahead.",
  },
  {
    id: "11",
    date: "2023-07-20",
    title: "Research Alert: COVID-19 Vaccine Hesitancy",
    description:
      "New publication examines conspiracy beliefs and vaccine reluctance, accounting for political affiliation and personality traits.",
    link: "https://doi.org/10.1016/j.vaccine.2023.05.041",
  },
  {
    id: "12",
    date: "2023-05-10",
    title: "Research Alert: Pediatric Eye Disease Disparities",
    description:
      "Collaboration with Bascom Palmer Eye Institute reveals geographic disparities in access to pediatric ophthalmology care.",
    link: "https://doi.org/10.1016/j.ophtha.2023.03.015",
  },
  {
    id: "13",
    date: "2023-03-15",
    title: "Lab Alumni Update",
    description:
      "Congratulations to our recent graduates who have moved on to medical school, graduate programs, and exciting careers in public health.",
  },
  {
    id: "14",
    date: "2023-01-20",
    title: "Research Alert: Gun Violence Spatial Patterns",
    description:
      "New research with Ryder Trauma Center examines spatial epidemiology of pediatric injuries from gun violence in Miami-Dade County.",
    link: "https://doi.org/10.1001/jamanetworkopen.2023.0456",
  },
  {
    id: "15",
    date: "2022-11-08",
    title: "Research Alert: Water Quality and Child Health",
    description:
      "Study in Ghana examines links between household water quality and childhood diarrheal disease outcomes.",
    link: "https://doi.org/10.1016/j.ijheh.2022.114056",
  },
  {
    id: "16",
    date: "2022-09-15",
    title: "New Semester Begins",
    description:
      "Welcome to all new lab members joining us this fall. Excited for the research ahead!",
  },
  {
    id: "17",
    date: "2022-07-01",
    title: "Research Alert: HWISE Scale Validation",
    description:
      "The Household Water Insecurity Experiences (HWISE) Scale continues to be validated across new contexts and populations.",
    link: "https://doi.org/10.1136/bmjopen-2022-061645",
  },
  {
    id: "18",
    date: "2022-05-20",
    title: "Graduation Congratulations",
    description:
      "Congratulations to all graduating students! Best wishes in your future endeavors.",
  },
  {
    id: "19",
    date: "2022-03-10",
    title: "Research Alert: Environmental Justice in Miami",
    description:
      "New publication examines environmental health disparities and residential segregation patterns in Miami-Dade County.",
    link: "https://doi.org/10.1016/j.healthplace.2022.102789",
  },
  {
    id: "20",
    date: "2022-01-15",
    title: "Spring Semester Welcome",
    description:
      "Happy New Year and welcome back for the spring semester. Looking forward to productive research ahead.",
  },
  {
    id: "21",
    date: "2021-11-10",
    title: "Research Alert: COVID-19 Misinformation Networks",
    description:
      "LatiNET project publishes findings on how health misinformation spreads through social networks in Latino communities.",
    link: "https://doi.org/10.1016/j.socscimed.2021.114523",
  },
  {
    id: "22",
    date: "2021-09-01",
    title: "New Academic Year Begins",
    description:
      "Welcome to all new and returning students for the 2021-2022 academic year.",
  },
  {
    id: "23",
    date: "2021-06-15",
    title: "Research Alert: Breast Cancer and Neighborhoods",
    description:
      "Collaboration with Sylvester Comprehensive Cancer Center examines spatial patterns of breast cancer influenced by residential segregation.",
    link: "https://doi.org/10.1158/1055-9965.EPI-21-0234",
  },
  {
    id: "24",
    date: "2021-04-20",
    title: "Research Alert: Water Insecurity During COVID-19",
    description:
      "New research examines how the COVID-19 pandemic affected household water insecurity globally.",
    link: "https://doi.org/10.1016/j.scitotenv.2021.147167",
  },
  {
    id: "25",
    date: "2021-02-10",
    title: "HWISE-RCN Expands Network",
    description:
      "The HWISE Research Coordination Network welcomes new collaborators from institutions across six continents.",
  },
];

export const people: Person[] = [
  {
    id: "1",
    name: "Justin Stoler",
    role: "Principal Investigator",
    degree: "Ph.D., M.P.H.",
    description:
      "Professor of Geography & Sustainable Development and Public Health Sciences. Former management consultant turned researcher focusing on health disparities, social and environmental epidemiology, and global health. Over a decade of experience studying drinking water and infectious diseases in Ghana. Co-leads the HWISE-RCN interdisciplinary research network.",
    email: "stoler@miami.edu",
    isCurrent: true,
  },
  {
    id: "2",
    name: "Lena Sharma",
    role: "Undergraduate Researcher",
    degree: "B.S. Global Health Studies, UM '27",
    description:
      "Focuses on climate-health intersections, climate change and forced migration, water insecurity metrics, and student perspectives on science.",
    isCurrent: true,
  },
];

export const alumni: Person[] = [
  {
    id: "a1",
    name: "Theo Krijnse Locker",
    role: "Alumni",
    degree: "Ecosystem Science and Policy, UM '25",
    isCurrent: false,
  },
  {
    id: "a2",
    name: "Megan Locke",
    role: "Alumni",
    degree: "Finance, UM '25",
    isCurrent: false,
  },
  {
    id: "a3",
    name: "Chioma Amuzie",
    role: "Alumni",
    degree: "MD Candidate, Miller School of Medicine",
    isCurrent: false,
  },
  {
    id: "a4",
    name: "Gladiz Velez",
    role: "Alumni",
    degree: "Public Health, UM",
    isCurrent: false,
  },
  {
    id: "a5",
    name: "Rajvi Shah",
    role: "Alumni",
    degree: "Health Sciences, UM",
    isCurrent: false,
  },
  {
    id: "a6",
    name: "Giulia Torrico",
    role: "Alumni",
    degree: "Global Health, UM",
    isCurrent: false,
  },
  {
    id: "a7",
    name: "Marcus Chen",
    role: "Alumni",
    degree: "Environmental Science, UM '24",
    isCurrent: false,
  },
  {
    id: "a8",
    name: "Sarah Martinez",
    role: "Alumni",
    degree: "Public Health, UM '24",
    isCurrent: false,
  },
  {
    id: "a9",
    name: "David Park",
    role: "Alumni",
    degree: "Geography, UM '24",
    isCurrent: false,
  },
  {
    id: "a10",
    name: "Emily Thompson",
    role: "Alumni",
    degree: "Global Health Studies, UM '23",
    isCurrent: false,
  },
  {
    id: "a11",
    name: "Michael Rodriguez",
    role: "Alumni",
    degree: "Environmental Science, UM '23",
    isCurrent: false,
  },
  {
    id: "a12",
    name: "Jennifer Liu",
    role: "Alumni",
    degree: "Public Health, UM '23",
    isCurrent: false,
  },
  {
    id: "a13",
    name: "Andrew Wilson",
    role: "Alumni",
    degree: "Geography, UM '22",
    isCurrent: false,
  },
  {
    id: "a14",
    name: "Rachel Kim",
    role: "Alumni",
    degree: "Health Sciences, UM '22",
    isCurrent: false,
  },
  {
    id: "a15",
    name: "Daniel Brown",
    role: "Alumni",
    degree: "Environmental Studies, UM '22",
    isCurrent: false,
  },
  {
    id: "a16",
    name: "Amanda Garcia",
    role: "Alumni",
    degree: "Public Health, UM '21",
    isCurrent: false,
  },
  {
    id: "a17",
    name: "Kevin Patel",
    role: "Alumni",
    degree: "Geography, UM '21",
    isCurrent: false,
  },
  {
    id: "a18",
    name: "Jessica Lee",
    role: "Alumni",
    degree: "Global Health, UM '21",
    isCurrent: false,
  },
  {
    id: "a19",
    name: "Christopher Davis",
    role: "Alumni",
    degree: "Environmental Science, UM '21",
    isCurrent: false,
  },
  {
    id: "a20",
    name: "Stephanie Williams",
    role: "Alumni",
    degree: "Health Sciences, UM '20",
    isCurrent: false,
  },
  {
    id: "a21",
    name: "Ryan Johnson",
    role: "Alumni",
    degree: "Public Health, UM '20",
    isCurrent: false,
  },
  {
    id: "a22",
    name: "Nicole Taylor",
    role: "Alumni",
    degree: "Geography, UM '20",
    isCurrent: false,
  },
  {
    id: "a23",
    name: "Brandon Moore",
    role: "Alumni",
    degree: "Environmental Studies, UM '19",
    isCurrent: false,
  },
  {
    id: "a24",
    name: "Ashley Anderson",
    role: "Alumni",
    degree: "Global Health Studies, UM '19",
    isCurrent: false,
  },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Household Water Insecurity Experiences Research Coordination Network (HWISE-RCN)",
    description:
      "Understanding household water security globally to improve water, sanitation, and hygiene (WASH) interventions. This interdisciplinary network studies infrastructure expansion, climate migration, COVID-19 impacts, water quality, and packaged water research across Ghana, Uganda, Ethiopia, Mexico, and Colombia.",
    partners: ["Northwestern University", "Arizona State University", "Global Partners"],
    focusAreas: ["Water Security", "WASH", "Global Health", "Climate Adaptation"],
    isActive: true,
  },
  {
    id: "2",
    title: "LatiNET: Social Network Model for COVID-19 Misinformation",
    description:
      "Led by Dr. Mariano Kanamori at the Miller School of Medicine, this project examines how health misinformation spreads through social networks among low-income Latino communities in South Florida, addressing unusually high HIV transmission rates in the region.",
    partners: ["Miller School of Medicine"],
    focusAreas: ["Health Misinformation", "Social Networks", "HIV/AIDS", "Latino Health"],
    isActive: true,
  },
  {
    id: "3",
    title: "Geo-Ophthalmology",
    description:
      "In partnership with Bascom Palmer Eye Institute, this project focuses on rare childhood eye diseases including pediatric glaucoma and uveitis. Research examines service deserts in Florida and nationally, as well as environmental determinants of eye disease.",
    partners: ["Bascom Palmer Eye Institute", "UM Health System"],
    focusAreas: ["Pediatric Health", "Eye Disease", "Service Access", "Environmental Health"],
    isActive: true,
  },
  {
    id: "4",
    title: "Pediatric Traumatic Injuries",
    description:
      "Partnership with Jackson Memorial Hospital's Ryder Trauma Center focusing on spatial epidemiology of pediatric injuries from gun violence, motor vehicle collisions, and bicycle accidents in Miami-Dade County.",
    partners: ["Ryder Trauma Center", "Jackson Memorial Hospital"],
    focusAreas: ["Pediatric Injuries", "Gun Violence", "Trauma", "Spatial Epidemiology"],
    isActive: true,
  },
  {
    id: "5",
    title: "Environmental and Epigenetic Determinants of Breast Cancer",
    description:
      "Collaboration with Sylvester Comprehensive Cancer Center examining spatial patterns of breast cancer influenced by residential segregation, poverty, and neighborhood composition.",
    partners: ["Sylvester Comprehensive Cancer Center", "UM Health System"],
    focusAreas: ["Cancer Research", "Environmental Health", "Health Disparities", "Epigenetics"],
    isActive: true,
  },
  {
    id: "6",
    title: "COVID-19 Conspiracies and Vaccine Hesitancy",
    description:
      "Survey research examining conspiracy beliefs and vaccine reluctance, aiming to understand resistance while accounting for political affiliation and personality traits.",
    focusAreas: ["Vaccine Hesitancy", "Misinformation", "Survey Research", "Public Health"],
    isActive: true,
  },
  {
    id: "7",
    title: "Sachet Water Industry in Ghana",
    description:
      "Examined the rise and implications of the packaged water industry in Ghana, including water quality, consumer behavior, and regulatory challenges.",
    partners: ["University of Ghana"],
    focusAreas: ["Water Quality", "Consumer Behavior", "Regulation"],
    isActive: false,
  },
  {
    id: "8",
    title: "Mosquito-borne Disease and Acute Febrile Illness in Ghana",
    description:
      "Research on transmission patterns and risk factors for mosquito-borne diseases and acute febrile illness in urban and peri-urban Ghana.",
    partners: ["University of Ghana", "Noguchi Memorial Institute"],
    focusAreas: ["Infectious Disease", "Vector-borne Disease", "Epidemiology"],
    isActive: false,
  },
  {
    id: "9",
    title: "Interpersonal Violence Disparities in Miami-Dade County",
    description:
      "Examined spatial patterns and social determinants of interpersonal violence across Miami-Dade County neighborhoods.",
    partners: ["Miami-Dade County"],
    focusAreas: ["Violence Prevention", "Health Disparities", "Urban Health"],
    isActive: false,
  },
];
