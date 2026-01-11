/**
 * FALLBACK DATA FILE
 *
 * This file contains static fallback data that is used when:
 * - Sanity CMS is unavailable or misconfigured
 * - The Sanity dataset is empty
 * - There's a network error fetching from Sanity
 *
 * PRIMARY CONTENT SOURCE: Sanity CMS (https://www.sanity.io/manage)
 * All content should be managed via the Sanity Studio at /studio
 *
 * TO REMOVE THIS FALLBACK:
 * 1. Ensure all content exists in Sanity and is working correctly
 * 2. Remove the fallback imports from:
 *    - app/news/page.tsx
 *    - app/people/page.tsx
 *    - app/projects/page.tsx
 * 3. Update those files to handle empty Sanity responses gracefully
 * 4. Delete this file (lib/data.ts)
 */

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
      "Dr. Stoler co-authored a paper about the 'geospatial genomics gap,' focusing on how to apply gene-person-place frameworks to account for risk factors at multiple levels and improve cancer screening and treatment.",
    link: "https://doi.org/10.1200/JCO.24.00751",
  },
  {
    id: "4",
    date: "2024-10-14",
    title: "Research Alert: Insights About Undiagnosed Diseases",
    description:
      "Dr. Stoler and senior undergraduate Theo Krijnse Locker contributed to a study about challenges in achieving ethnic and racial representation in the Undiagnosed Diseases Network.",
    link: "https://doi.org/10.1002/ajmg.a.63904",
  },
  {
    id: "5",
    date: "2024-06-10",
    title: "Water As 'A Pillar of Modern Society'",
    description:
      "Dr. Stoler discusses challenges related to infrastructure, policies, technologies addressing water shortages around the world amid record heat waves.",
    link: "https://news.miami.edu/stories/2024/06/water-as-a-pillar-of-modern-society.html",
  },
  {
    id: "6",
    date: "2024-01-17",
    title: "Research Alert: The Impact of Rapid Handpump Repairs",
    description:
      "Study demonstrates that when broken handpumps were fixed within 24 hours, rates of child diarrhea plunged relative to longer fix times in rural Kenya.",
  },
];

export const people: Person[] = [
  {
    id: "1",
    name: "Justin Stoler",
    role: "Principal Investigator",
    degree: "Ph.D., M.P.H.",
    description:
      "Professor of Geography & Sustainable Development and Public Health Sciences. Former management consultant from New York; business and psychology double-major. Research focuses on health disparities using social, environmental, and spatial epidemiological methods; drinking water and infectious diseases in Ghana. Co-leads HWISE-RCN, an interdisciplinary water insecurity research community.",
    email: "stoler@miami.edu",
    isCurrent: true,
  },
  {
    id: "2",
    name: "Lena Sharma",
    role: "Undergraduate Researcher",
    degree: "B.S. Global Health Studies, UM '27",
    description:
      "Research interests include climate-health intersections, climate change and forced migration, water insecurity metrics, and student views of science.",
    isCurrent: true,
  },
];

export const alumni: Person[] = [
  {
    id: "a1",
    name: "Theo Krijnse Locker",
    role: "Alumni",
    degree: "UM '25, Ecosystem Science and Policy",
    isCurrent: false,
  },
  {
    id: "a2",
    name: "Megan Locke",
    role: "Alumni",
    degree: "UM '25, Finance",
    isCurrent: false,
  },
  {
    id: "a3",
    name: "Chioma Amuzie",
    role: "Alumni",
    degree: "UM '25, MD, Miller School of Medicine",
    isCurrent: false,
  },
  {
    id: "a4",
    name: "Gladiz Velez",
    role: "Alumni",
    degree: "UM '23, Ecosystem Science and Policy",
    isCurrent: false,
  },
  {
    id: "a5",
    name: "Rajvi Shah",
    role: "Alumni",
    degree: "UM '23, Geography and Sustainable Development",
    isCurrent: false,
  },
  {
    id: "a6",
    name: "Giulia Torrico",
    role: "Alumni",
    degree: "UM '22, Global Health Studies",
    isCurrent: false,
  },
  {
    id: "a7",
    name: "Natalia Tohmé",
    role: "Alumni",
    degree: "UM '22, MS in Climate and Health",
    isCurrent: false,
  },
  {
    id: "a8",
    name: "Erica Goldfinger",
    role: "Alumni",
    degree: "UM '22, Ecosystem Science and Policy; Geography and Sustainable Development",
    isCurrent: false,
  },
  {
    id: "a9",
    name: "Eliza Stuart",
    role: "Alumni",
    degree: "UM '22, Public Health; Geography and Sustainable Development",
    isCurrent: false,
  },
  {
    id: "a10",
    name: "Andrea (Sullivan) Lemaitre",
    role: "Alumni",
    degree: "UM '22, PhD in Environmental Science and Policy",
    isCurrent: false,
  },
  {
    id: "a11",
    name: "Melissa Sidote",
    role: "Alumni",
    degree: "UM '20, Public Health, Psychology; MPH '21",
    isCurrent: false,
  },
  {
    id: "a12",
    name: "Christina Paraggio",
    role: "Alumni",
    degree: "UM '21, Microbiology & Immunology, Spanish",
    isCurrent: false,
  },
  {
    id: "a13",
    name: "Nicholas Amoako",
    role: "Alumni",
    degree: "University of Ghana '19, PhD Molecular Cell Biology of Infectious Diseases",
    isCurrent: false,
  },
  {
    id: "a14",
    name: "Jaclyn Verity",
    role: "Alumni",
    degree: "UM '17, Health Geographics, Religious Studies",
    isCurrent: false,
  },
  {
    id: "a15",
    name: "Kurt Wyatt",
    role: "Alumni",
    degree: "UM '17, Geography, Sustainability, GIS",
    isCurrent: false,
  },
  {
    id: "a16",
    name: "Laura Zebib",
    role: "Alumni",
    degree: "UM '15, Biology, Public Health, Geospatial Technology",
    isCurrent: false,
  },
  {
    id: "a17",
    name: "Katie Ross-Driscoll",
    role: "Alumni",
    degree: "UM '15, Public Health",
    isCurrent: false,
  },
  {
    id: "a18",
    name: "Kiana Winslow",
    role: "Alumni",
    degree: "UM '15, Geography, Religion & Health Care",
    isCurrent: false,
  },
  {
    id: "a19",
    name: "Alessandria San Roman",
    role: "Alumni",
    degree: "UM '15, Political Science, Business Law, Geography",
    isCurrent: false,
  },
  {
    id: "a20",
    name: "Rupert Delimini",
    role: "Alumni",
    degree: "University of Ghana '14, MPhil Biochemistry and Molecular Biology",
    isCurrent: false,
  },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Household Water Insecurity Experiences Research Coordination Network (HWISE-RCN)",
    description:
      "Understanding and measuring the nuanced ways that households around the world experience water security. The goal is to improve water, sanitation, and hygiene interventions to achieve Sustainable Development Goal 6. Research spans Ghana, Uganda, Ethiopia, Mexico, and Colombia, covering topics including infrastructure expansion, climate migration, Covid-19, water quality, and packaged water.",
    partners: ["Northwestern University", "Arizona State University", "Global Partners"],
    focusAreas: ["Water Security", "WASH", "Global Health", "Climate Adaptation"],
    isActive: true,
  },
  {
    id: "2",
    title: "LatiNET: Social Network Model for Understanding COVID-19 Misinformation",
    description:
      "Led by Dr. Mariano Kanamori at the Miller School of Medicine, this project examines how misinformation spreads through social networks among low-income Latino communities in South Florida with high HIV transmission rates.",
    partners: ["Miller School of Medicine"],
    focusAreas: ["Health Misinformation", "Social Networks", "HIV/AIDS", "Latino Health"],
    isActive: true,
  },
  {
    id: "3",
    title: "Geo-Ophthalmology",
    description:
      "In partnership with University of Miami Health System's Bascom Palmer Eye Institute, this project focuses on rare childhood eye diseases including pediatric glaucoma and uveitis. Research examines service deserts in Florida and nationally, as well as environmental determinants of eye diseases.",
    partners: ["Bascom Palmer Eye Institute", "UM Health System"],
    focusAreas: ["Pediatric Health", "Eye Disease", "Service Access", "Environmental Health"],
    isActive: true,
  },
  {
    id: "4",
    title: "Pediatric Traumatic Injuries",
    description:
      "Partnership with Jackson Memorial Hospital's Ryder Trauma Center focusing on spatial epidemiology of pediatric injuries from gun violence, motor vehicle collisions, and bicycle accidents.",
    partners: ["Ryder Trauma Center", "Jackson Memorial Hospital"],
    focusAreas: ["Pediatric Injuries", "Gun Violence", "Trauma", "Spatial Epidemiology"],
    isActive: true,
  },
  {
    id: "5",
    title: "Environmental and Epigenetic Determinants of Breast Cancer",
    description:
      "Collaboration with University of Miami Health System's Sylvester Comprehensive Cancer Center examining spatial epidemiology of breast cancer and epigenetic effects of structural health determinants.",
    partners: ["Sylvester Comprehensive Cancer Center", "UM Health System"],
    focusAreas: ["Cancer Research", "Environmental Health", "Health Disparities", "Epigenetics"],
    isActive: true,
  },
  {
    id: "6",
    title: "Covid-19 Conspiracies and Vaccine Hesitancy",
    description:
      "Survey research examining how conspiracy theory beliefs shape vaccine hesitancy, with consideration of personal politics and personality traits.",
    focusAreas: ["Vaccine Hesitancy", "Misinformation", "Survey Research", "Public Health"],
    isActive: true,
  },
  {
    id: "7",
    title: "Sachet Water in Ghana",
    description:
      "Over a decade of study on Ghana's sachet water industry. Research informed WHO policy recognition of sachets as primary water source (2017).",
    partners: ["University of Ghana"],
    focusAreas: ["Water Quality", "Consumer Behavior", "Policy"],
    isActive: false,
  },
  {
    id: "8",
    title: "Mosquito-borne Disease and Undifferentiated Acute Febrile Illness in Ghana",
    description:
      "Research on pediatric acute febrile illnesses often misdiagnosed as malaria, using molecular approaches to identify dengue fever and other pathogens.",
    partners: ["University of Ghana", "Noguchi Memorial Institute"],
    focusAreas: ["Infectious Disease", "Vector-borne Disease", "Epidemiology"],
    isActive: false,
  },
  {
    id: "9",
    title: "Interpersonal Violence in Miami-Dade County",
    description:
      "Research on gunshot wound injuries, intimate partner violence screening and arrests. Findings reveal persistent disparities driven by the intersection of race, space, and poverty.",
    partners: ["Miami-Dade County"],
    focusAreas: ["Violence Prevention", "Health Disparities", "Urban Health"],
    isActive: false,
  },
];
