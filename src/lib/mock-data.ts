import { Article, Comment } from "@/types";

export const mockArticles: Article[] = [
  {
    id: "1",
    slug: "ghana-economy-reaches-new-milestone-in-2026",
    title: "Ghana's Economy Reaches New Milestone as GDP Growth Surpasses Expectations",
    summary: "The country's economic growth has exceeded analyst predictions, with key sectors showing remarkable resilience and expansion in the first quarter of 2026.",
    content: `<p>Ghana's economy has delivered a stunning performance in the first quarter of 2026, with GDP growth surpassing the most optimistic forecasts from international analysts. The Ghana Statistical Service reported a growth rate of 6.8%, significantly above the projected 5.2%.</p>
<p>The impressive figures were driven by strong performances across multiple sectors, including agriculture, services, and the burgeoning technology industry. Finance Minister Dr. Mohammed Amin attributed the success to strategic policy reforms implemented over the past 18 months.</p>
<p>"We are seeing the fruits of disciplined fiscal management and targeted investment in key growth sectors," Dr. Amin said at a press conference in Accra. "The private sector has responded positively to our business-friendly policies."</p>
<p>The cocoa sector, traditionally a cornerstone of Ghana's economy, saw a 12% increase in production, while gold exports remained robust despite global price fluctuations. Perhaps most notably, the technology sector contributed an unprecedented 8% to overall GDP.</p>
<p>International observers have taken note of Ghana's economic trajectory. The International Monetary Fund revised its annual growth forecast upward, while the World Bank highlighted Ghana as one of the top-performing economies in Sub-Saharan Africa.</p>
<p>However, economists caution that sustaining this momentum will require continued investment in infrastructure, education, and healthcare. "The fundamentals are strong, but we must remain vigilant against external shocks," said Professor Akua Mensah of the University of Ghana Business School.</p>`,
    image: "/images/hero-banner.png",
    category: "news",
    author: "Kwame Asante",
    authorAvatar: "",
    publishedAt: "2026-03-25T08:00:00Z",
    readTime: 5,
    views: 15420,
    likes: 892,
    comments: 156,
    isTrending: true,
  },
  {
    id: "2",
    slug: "black-stars-qualify-for-world-cup-2026",
    title: "Black Stars Secure Historic World Cup Qualification with Dominant Victory",
    summary: "Ghana's national football team sealed their spot in the 2026 World Cup with a commanding 3-0 victory that sent the nation into celebrations.",
    content: `<p>The Black Stars of Ghana have secured qualification for the 2026 FIFA World Cup after a dominant 3-0 victory in their final qualifying match. The Accra Sports Stadium erupted in celebration as the final whistle confirmed Ghana's return to football's biggest stage.</p>
<p>Goals from Mohammed Kudus, Antoine Semenyo, and a spectacular free-kick from Thomas Partey sealed the deal for the West African nation. The team's qualification campaign was marked by an impressive record of eight wins, two draws, and no defeats.</p>
<p>Head coach Chris Hughton praised his players' dedication and the unwavering support of Ghanaian fans. "This team has shown incredible character throughout the campaign. The players have made every Ghanaian proud," Hughton said.</p>
<p>The victory sparked celebrations across the country, with fans taking to the streets in Accra, Kumasi, Tamale, and other cities. Social media was flooded with congratulatory messages from world leaders and sports personalities.</p>`,
    image: "/images/news-sports.png",
    category: "sports",
    author: "Kofi Mensah",
    authorAvatar: "",
    publishedAt: "2026-03-24T18:30:00Z",
    readTime: 4,
    views: 28500,
    likes: 2340,
    comments: 489,
    isTrending: true,
  },
  {
    id: "3",
    slug: "tech-hub-accra-attracts-global-investment",
    title: "Accra Emerges as West Africa's Leading Tech Hub, Attracting $2B in Investments",
    summary: "Major global tech companies are setting up operations in Accra as the city cements its position as the technology capital of West Africa.",
    content: `<p>Accra has solidified its reputation as West Africa's premier technology hub, attracting over $2 billion in foreign direct investment in the tech sector during 2025. The capital city is now home to over 500 tech startups and has drawn the attention of Silicon Valley giants.</p>
<p>The growth has been fueled by a combination of government incentives, a young and educated workforce, and improving digital infrastructure. The Ghana Digital Innovation Act, passed last year, provides tax breaks and streamlined regulations for tech companies.</p>
<p>Major international firms including Google, Microsoft, and Twitter have expanded their African operations through Accra-based offices. The city's vibrant startup ecosystem has also produced several unicorns valued at over $1 billion.</p>
<p>"Accra offers a unique combination of talent, infrastructure, and government support that makes it an ideal location for tech investment," said Nana Ama Osei, CEO of AccraTech Ventures.</p>`,
    image: "/images/news-technology.png",
    category: "technology",
    author: "Esi Donkor",
    authorAvatar: "",
    publishedAt: "2026-03-24T14:00:00Z",
    readTime: 6,
    views: 12800,
    likes: 756,
    comments: 98,
    isTrending: true,
  },
  {
    id: "4",
    slug: "national-health-insurance-expansion-reaches-millions",
    title: "National Health Insurance Expansion Reaches 5 Million More Ghanaians",
    summary: "The government's ambitious healthcare initiative has extended coverage to millions of previously uninsured citizens, marking a major public health achievement.",
    content: `<p>Ghana's National Health Insurance Scheme (NHIS) has reached a significant milestone, extending coverage to an additional 5 million citizens in its latest expansion phase. The initiative brings the total number of insured Ghanaians to over 20 million.</p>
<p>Health Minister Dr. Akosua Frimpong announced the achievement at a ceremony in Tamale, highlighting the government's commitment to universal healthcare coverage. "Every Ghanaian deserves access to quality healthcare, regardless of their economic status," she said.</p>
<p>The expansion focused particularly on rural and underserved communities, with mobile registration units deployed to remote areas. Digital health records have also been implemented to streamline service delivery.</p>`,
    image: "/images/hero-banner.png",
    category: "health",
    author: "Dr. Yaw Boateng",
    authorAvatar: "",
    publishedAt: "2026-03-24T10:00:00Z",
    readTime: 5,
    views: 8900,
    likes: 534,
    comments: 67,
  },
  {
    id: "5",
    slug: "afrobeats-star-sarkodie-breaks-streaming-record",
    title: "Sarkodie Breaks African Streaming Records with New Album Release",
    summary: "Ghana's rap king Sarkodie has shattered streaming records across the continent with his highly anticipated new album garnering 50 million streams in its first week.",
    content: `<p>Ghanaian hip-hop artist Sarkodie has broken multiple African streaming records with the release of his latest album "The Legacy." The album accumulated over 50 million streams across platforms in its debut week.</p>
<p>The 18-track project features collaborations with international artists and showcases Sarkodie's evolution as an artist while staying true to his Ghanaian roots. Critics have hailed it as his most ambitious work to date.</p>
<p>"This album is for Ghana, for Africa, and for everyone who believes in the power of our music and culture," Sarkodie said during a live streaming event that drew over 2 million concurrent viewers.</p>`,
    image: "/images/news-sports.png",
    category: "entertainment",
    author: "Abena Serwaa",
    authorAvatar: "",
    publishedAt: "2026-03-23T20:00:00Z",
    readTime: 3,
    views: 34200,
    likes: 4560,
    comments: 782,
    isTrending: true,
  },
  {
    id: "6",
    slug: "ghana-premier-league-season-review",
    title: "Hearts of Oak Lead Ghana Premier League as Season Enters Final Stretch",
    summary: "Accra Hearts of Oak hold a three-point advantage at the top of the table with just five matches remaining in a thrilling season.",
    content: `<p>Accra Hearts of Oak are on course for another Ghana Premier League title as the 2025/26 season enters its climactic final stretch. The Phobians hold a three-point lead at the summit with five games remaining.</p>
<p>Coach Samuel Boadu's side have been the most consistent team throughout the campaign, combining solid defensive organization with devastating attacking play. Striker Daniel Afriyie Barnieh leads the league's scoring charts with 18 goals.</p>`,
    image: "/images/news-sports.png",
    category: "sports",
    author: "Kofi Mensah",
    authorAvatar: "",
    publishedAt: "2026-03-23T16:00:00Z",
    readTime: 4,
    views: 11200,
    likes: 890,
    comments: 234,
  },
  {
    id: "7",
    slug: "ai-startup-ghana-raises-50-million",
    title: "Ghanaian AI Startup Raises $50 Million in Series B Funding Round",
    summary: "TechNova, an Accra-based artificial intelligence company, has secured one of the largest funding rounds for an African tech startup.",
    content: `<p>TechNova, a Ghanaian artificial intelligence startup, has raised $50 million in a Series B funding round led by prominent Silicon Valley venture capital firms. The funding makes it one of the best-funded AI companies in Africa.</p>
<p>The company specializes in natural language processing for African languages and has developed AI solutions used by banks, telecommunications companies, and government agencies across West Africa.</p>`,
    image: "/images/news-technology.png",
    category: "technology",
    author: "Esi Donkor",
    authorAvatar: "",
    publishedAt: "2026-03-23T12:00:00Z",
    readTime: 5,
    views: 9800,
    likes: 678,
    comments: 123,
    isTrending: true,
  },
  {
    id: "8",
    slug: "ghana-malaria-vaccine-rollout-success",
    title: "Ghana's Malaria Vaccine Rollout Achieves 85% Coverage in Target Regions",
    summary: "The nationwide malaria vaccination programme has exceeded its targets, significantly reducing malaria cases in endemic regions.",
    content: `<p>Ghana's groundbreaking malaria vaccine rollout has achieved an impressive 85% coverage rate in target regions, exceeding initial projections. The programme has been credited with a 40% reduction in malaria cases among children under five.</p>
<p>The Ghana Health Service reported that over 3 million children have received the complete vaccination course since the programme's expansion in 2025. The success has drawn praise from the World Health Organization.</p>`,
    image: "/images/hero-banner.png",
    category: "health",
    author: "Dr. Yaw Boateng",
    authorAvatar: "",
    publishedAt: "2026-03-22T09:00:00Z",
    readTime: 4,
    views: 7600,
    likes: 445,
    comments: 56,
  },
  {
    id: "9",
    slug: "ghana-film-industry-international-recognition",
    title: "Ghallywood Film 'The Gold Coast' Nominated for International Film Award",
    summary: "A Ghanaian production has made history with a nomination at one of the world's most prestigious film festivals.",
    content: `<p>The Ghanaian film industry has reached new heights with 'The Gold Coast' receiving a nomination at the prestigious Cannes Film Festival. Directed by Shirley Frimpong-Manso, the film tells a powerful story of identity and heritage.</p>
<p>The nomination marks a historic moment for Ghallywood and African cinema. The film has already won several awards at regional festivals and garnered critical acclaim for its stunning cinematography and compelling narrative.</p>`,
    image: "/images/news-sports.png",
    category: "entertainment",
    author: "Abena Serwaa",
    authorAvatar: "",
    publishedAt: "2026-03-22T15:00:00Z",
    readTime: 3,
    views: 18900,
    likes: 2100,
    comments: 345,
  },
  {
    id: "10",
    slug: "government-announces-new-infrastructure-plan",
    title: "Government Unveils $10 Billion Infrastructure Development Plan",
    summary: "A comprehensive infrastructure initiative aims to transform Ghana's transportation, energy, and digital connectivity over the next five years.",
    content: `<p>The Government of Ghana has unveiled an ambitious $10 billion infrastructure development plan that aims to transform the country's transportation networks, energy systems, and digital connectivity over the next five years.</p>
<p>President Nana Akufo-Addo announced the plan at a special session of Parliament, describing it as "the most significant infrastructure investment in Ghana's history." Key projects include a new coastal highway, expanded rail network, and nationwide 5G deployment.</p>`,
    image: "/images/hero-banner.png",
    category: "news",
    author: "Kwame Asante",
    authorAvatar: "",
    publishedAt: "2026-03-21T11:00:00Z",
    readTime: 6,
    views: 22100,
    likes: 1340,
    comments: 278,
    isTrending: true,
  },
  {
    id: "11",
    slug: "renewable-energy-solar-farm-largest-africa",
    title: "Ghana Inaugurates West Africa's Largest Solar Farm in Northern Region",
    summary: "The 200MW solar installation is expected to provide clean energy to over 1 million households across the northern regions.",
    content: `<p>Ghana has inaugurated West Africa's largest solar farm in the Northern Region, a 200-megawatt facility that represents a major step towards the country's renewable energy goals. The installation spans over 500 acres.</p>
<p>The project, a collaboration between the government and international renewable energy firms, is expected to provide electricity to over 1 million households while reducing carbon emissions by an estimated 300,000 tonnes annually.</p>`,
    image: "/images/news-technology.png",
    category: "technology",
    author: "Esi Donkor",
    authorAvatar: "",
    publishedAt: "2026-03-21T08:00:00Z",
    readTime: 4,
    views: 6700,
    likes: 432,
    comments: 78,
  },
  {
    id: "12",
    slug: "sponsored-digital-banking-revolution",
    title: "Digital Banking is Transforming How Ghanaians Manage Money",
    summary: "Discover how mobile-first banking solutions are making financial services accessible to millions of Ghanaians for the first time.",
    content: `<p>The digital banking revolution in Ghana is reaching unprecedented levels, with mobile money transactions now exceeding traditional banking volumes. Leading fintech companies are making financial inclusion a reality for millions.</p>
<p>This transformation is particularly impactful in rural areas where traditional banking infrastructure is limited. With just a mobile phone, Ghanaians can now save, borrow, invest, and transact with ease.</p>`,
    image: "/images/news-technology.png",
    category: "technology",
    author: "Sponsored Content",
    authorAvatar: "",
    publishedAt: "2026-03-25T06:00:00Z",
    readTime: 3,
    views: 5400,
    likes: 210,
    comments: 34,
    isSponsored: true,
  },
];

export const mockComments: Comment[] = [
  {
    id: "c1",
    articleId: "1",
    userId: "u1",
    userName: "Akua Mensah",
    userAvatar: "",
    content: "This is fantastic news for Ghana! The economic reforms are clearly paying off. Hope the government continues to support small businesses too.",
    createdAt: "2026-03-25T09:30:00Z",
    likes: 24,
  },
  {
    id: "c2",
    articleId: "1",
    userId: "u2",
    userName: "Emmanuel Osei",
    userAvatar: "",
    content: "Great to see positive economic indicators. However, I hope this growth translates to better living standards for everyday Ghanaians.",
    createdAt: "2026-03-25T10:15:00Z",
    likes: 18,
  },
  {
    id: "c3",
    articleId: "2",
    userId: "u3",
    userName: "Fatima Ibrahim",
    userAvatar: "",
    content: "Go Black Stars! What a performance! The team has made us all so proud. World Cup here we come!",
    createdAt: "2026-03-24T19:00:00Z",
    likes: 56,
  },
  {
    id: "c4",
    articleId: "2",
    userId: "u4",
    userName: "Kofi Agyeman",
    userAvatar: "",
    content: "Kudus was incredible tonight! His goal was world class. This team has the quality to go far in the World Cup.",
    createdAt: "2026-03-24T19:45:00Z",
    likes: 42,
  },
  {
    id: "c5",
    articleId: "3",
    userId: "u5",
    userName: "Grace Appiah",
    userAvatar: "",
    content: "As a software developer in Accra, I can confirm the tech scene is booming. So many opportunities for young Ghanaians in tech!",
    createdAt: "2026-03-24T15:30:00Z",
    likes: 31,
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return mockArticles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(category: string): Article[] {
  return mockArticles.filter((a) => a.category === category);
}

export function getTrendingArticles(): Article[] {
  return mockArticles.filter((a) => a.isTrending);
}

export function searchArticles(query: string): Article[] {
  const q = query.toLowerCase();
  return mockArticles.filter(
    (a) =>
      a.title.toLowerCase().includes(q) ||
      a.summary.toLowerCase().includes(q) ||
      a.category.toLowerCase().includes(q)
  );
}

export function getCommentsByArticleId(articleId: string): Comment[] {
  return mockComments.filter((c) => c.articleId === articleId);
}
