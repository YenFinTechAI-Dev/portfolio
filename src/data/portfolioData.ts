export type Locale = 'vi' | 'en';

export type ProjectCategory = 'all' | 'fintech-ai' | 'data-ml' | 'blockchain-web';

export interface ProjectItem {
  id: string;
  repoName: string;
  title: Record<Locale, string>;
  subtitle: Record<Locale, string>;
  summary: Record<Locale, string>;
  problem: Record<Locale, string>;
  solution: Record<Locale, string>;
  highlights: Record<Locale, string[]>;
  category: Exclude<ProjectCategory, 'all'>;
  categoryLabel: Record<Locale, string>;
  year: string;
  stack: string[];
  githubUrl: string;
  demoUrl?: string;
  image?: string;
  featured: boolean;
  bentoSpan?: 'large' | 'standard';
}

export interface RepoArchiveItem {
  name: string;
  title: Record<Locale, string>;
  category: Record<Locale, string>;
  language: string;
  updated: string;
  summary: Record<Locale, string>;
  githubUrl: string;
  demoUrl?: string;
}

export interface CapabilityTrack {
  index: string;
  id: string;
  title: Record<Locale, string>;
  focus: Record<Locale, string>;
  description: Record<Locale, string>;
  tools: string[];
  deliverables: Record<Locale, string[]>;
  blueprintTitle: Record<Locale, string>;
  blueprintFile: string;
  blueprintCode: string;
  metrics: {
    label: Record<Locale, string>;
    value: string;
  }[];
}

export interface MilestoneItem {
  year: string;
  period: Record<Locale, string>;
  title: Record<Locale, string>;
  detail: Record<Locale, string>;
  artifacts: string[];
}

export const PROFILE = {
  handle: 'YenFinTechAI-Dev',
  displayName: 'Trần Yến',
  brandWordmark: 'YenFinTechAI',
  email: 'tranyen11t6@gmail.com',
  githubUrl: 'https://github.com/YenFinTechAI-Dev',
  location: {
    vi: 'Việt Nam',
    en: 'Vietnam',
  },
  heroImage: '/src/assets/images/hero_fintech_ai_visual_1795598292061.jpg',
  initialRepoCount: 36,
  liveDeployCount: 6,
};

export const PROJECTS: ProjectItem[] = [
  {
    id: 'blockchain-charity',
    repoName: 'blockchain-charity',
    title: {
      vi: 'GIV Charity — Nền tảng Quyên góp Blockchain',
      en: 'GIV Charity — Transparent Blockchain Donation Platform',
    },
    subtitle: {
      vi: 'Ethereum Smart Contracts & Minh bạch hóa giải ngân',
      en: 'Ethereum Smart Contracts & Automated Disbursement',
    },
    summary: {
      vi: 'Hệ thống quyên góp từ thiện phi tập trung trên Ethereum, sử dụng Smart Contract để ghi log on-chain minh bạch, tự động giải ngân theo mốc và hoàn tiền khi chiến dịch không đạt mục tiêu.',
      en: 'Decentralized philanthropy platform built on Ethereum where smart contracts record immutable on-chain logs, automate milestone disbursements, and handle trustless refunds.',
    },
    problem: {
      vi: 'Các chiến dịch gây quỹ truyền thống thiếu khả năng kiểm chứng dòng tiền theo thời gian thực và phụ thuộc hoàn toàn vào khâu trung gian khi giải ngân.',
      en: 'Traditional charity campaigns lack real-time fund verifiability and depend entirely on opaque manual intermediaries for disbursement.',
    },
    solution: {
      vi: 'Thiết kế bộ hợp đồng thông minh bằng Solidity + Hardhat gồm TransparencyContract, GIVToken (ERC-20 reward token) và Campaign logic, kết nối trực tiếp tới giao diện web TypeScript.',
      en: 'Engineered a Solidity + Hardhat contract suite featuring TransparencyContract, GIVToken (ERC-20 reward token), and Campaign governance wired to a TypeScript web frontend.',
    },
    highlights: {
      vi: [
        'Ghi nhận toàn bộ lịch sử đóng góp và giải ngân on-chain không thể sửa đổi',
        'Tích hợp token thưởng ERC-20 (GIVToken) khuyến khích sự tham gia minh bạch',
        'Cơ chế hoàn tiền tự động theo điều kiện hợp đồng thông minh',
        'Triển khai bản dùng thử trực tuyến trên Vercel với luồng tương tác đầy đủ',
      ],
      en: [
        'Immutable on-chain audit trail for every donation and campaign payout',
        'Custom ERC-20 GIVToken reward layer incentivizing verified contributions',
        'Automated smart-contract refund guardrails when campaign milestones fail',
        'Production web frontend deployed live on Vercel',
      ],
    },
    category: 'blockchain-web',
    categoryLabel: {
      vi: 'Blockchain & Web3',
      en: 'Blockchain & Web3',
    },
    year: '2026',
    stack: ['TypeScript', 'Solidity', 'Hardhat', 'Ethereum', 'ERC-20'],
    githubUrl: 'https://github.com/YenFinTechAI-Dev/blockchain-charity',
    demoUrl: 'https://blockchain-charity-three.vercel.app',
    image: '/src/assets/images/project_blockchain_charity_1795598295653.jpg',
    featured: true,
    bentoSpan: 'large',
  },
  {
    id: 'dataforge-vespersign',
    repoName: 'vespersignkholuyenbaitap',
    title: {
      vi: 'DataForge — Nền tảng Luyện tập DA / DS / ML',
      en: 'DataForge — Interactive DA / DS / ML Practice Platform',
    },
    subtitle: {
      vi: 'Môi trường thực hành bài tập dữ liệu & chuẩn bị sự nghiệp',
      en: 'Interactive Learning & Career Preparation for Data Professionals',
    },
    summary: {
      vi: 'Ứng dụng web tương tác giúp người học Data Analytics, Data Science và Machine Learning luyện tập bài toán thực chiến có cấu trúc thay vì chỉ đọc lý thuyết rời rạc.',
      en: 'Interactive web learning platform helping aspiring Data Analysts, Data Scientists, and ML Engineers master practical case studies and structured technical drills.',
    },
    problem: {
      vi: 'Người mới bước vào lĩnh vực Dữ liệu & AI thường thiếu lộ trình luyện tập kết nối giữa SQL, Python, thống kê và tư duy bài toán nghiệp vụ.',
      en: 'Aspiring data professionals often struggle to bridge fragmented tutorials with realistic SQL, Python, and machine learning problem-solving.',
    },
    solution: {
      vi: 'Xây dựng nền tảng React 19 + TypeScript tốc độ cao phân chia rõ theo chuyên ngành DA, DS, ML kèm hệ thống bài tập và theo dõi tiến độ trực quan.',
      en: 'Built a fast React 19 + TypeScript learning workspace organized across DA, DS, and ML tracks with guided exercises and progress tracking.',
    },
    highlights: {
      vi: [
        'Cấu trúc lộ trình rõ ràng cho 3 nhánh: Data Analytics, Data Science và Machine Learning',
        'Kiến trúc frontend hiện đại với React 19 và TypeScript chuẩn hóa kiểu dữ liệu',
        'Giao diện tập trung vào trải nghiệm đọc và luyện tập liên tục không gây nhiễu',
        'Phát hành trực tuyến trên Vercel để cộng đồng truy cập ngay trên trình duyệt',
      ],
      en: [
        'Structured curriculum pathways across Data Analytics, Data Science, and ML',
        'Modern React 19 + TypeScript architecture for instant responsive feedback',
        'Distraction-free practice workspace focused on deep retention',
        'Publicly deployed on Vercel for immediate browser access',
      ],
    },
    category: 'data-ml',
    categoryLabel: {
      vi: 'Data & ML',
      en: 'Data & ML',
    },
    year: '2026',
    stack: ['React 19', 'TypeScript', 'Data Analytics', 'Machine Learning'],
    githubUrl: 'https://github.com/YenFinTechAI-Dev/vespersignkholuyenbaitap',
    demoUrl: 'https://vespersignkholuyenbaitap.vercel.app',
    image: '/src/assets/images/project_vespersign_lab_1795598292996.jpg',
    featured: true,
    bentoSpan: 'large',
  },
  {
    id: 'ai-finvest-advisor',
    repoName: 'AI-FINVEST-ADVISOR',
    title: {
      vi: 'AI-FINVEST-ADVISOR — Trợ lý Quản lý Danh mục Đầu tư',
      en: 'AI-FINVEST-ADVISOR — AI Portfolio Intelligence Dashboard',
    },
    subtitle: {
      vi: 'Phân tích phân bổ tài sản, rủi ro & khuyến nghị AI thời gian thực',
      en: 'Real-Time Portfolio Allocation, Risk Modeling & AI Insights',
    },
    summary: {
      vi: 'Dashboard tài chính ứng dụng AI hỗ trợ nhà đầu tư theo dõi phân bổ danh mục, quản lý lịch sử giao dịch, đo lường rủi ro và nhận phân tích thông minh lấy cảm hứng từ Bloomberg & TradingView.',
      en: 'AI-native investment portfolio dashboard enabling investors to track asset allocation, evaluate portfolio risk, and surface real-time financial insights inspired by Bloomberg and TradingView.',
    },
    problem: {
      vi: 'Nhà đầu tư cá nhân phải tổng hợp dữ liệu từ nhiều bảng tính rời rạc và khó đánh giá nhanh mức độ rủi ro tập trung của danh mục.',
      en: 'Individual investors often juggle scattered spreadsheets and lack clear visibility into portfolio concentration and downside risk.',
    },
    solution: {
      vi: 'Kết hợp trực quan hóa tài chính định lượng với lớp phân tích AI để tóm tắt rủi ro, biến động hiệu suất và đề xuất tái cân bằng danh mục trực quan.',
      en: 'Combined quantitative portfolio analytics with an AI advisory layer to highlight risk exposure, performance attribution, and rebalancing cues.',
    },
    highlights: {
      vi: [
        'Theo dõi tỷ trọng phân bổ danh mục và biến động giao dịch tập trung',
        'Phân tích chỉ số rủi ro và hiệu suất danh mục bằng Python & Jupyter modeling',
        'Trải nghiệm trực quan mật độ thông tin cao theo chuẩn FinTech hiện đại',
      ],
      en: [
        'Unified portfolio allocation breakdown and transaction telemetry',
        'Quantitative risk modeling and analytical notebooks built in Python',
        'High-clarity FinTech dashboard architecture for rapid decision making',
      ],
    },
    category: 'fintech-ai',
    categoryLabel: {
      vi: 'FinTech & AI',
      en: 'FinTech & AI',
    },
    year: '2026',
    stack: ['Python', 'Jupyter Notebook', 'FinTech Analytics', 'AI Insights'],
    githubUrl: 'https://github.com/YenFinTechAI-Dev/AI-FINVEST-ADVISOR',
    image: '/src/assets/images/project_fintech_advisor_1795598295541.jpg',
    featured: true,
    bentoSpan: 'standard',
  },
  {
    id: 'ecommerce-data-warehouse',
    repoName: 'ecommerce-data-warehouse',
    title: {
      vi: 'E-Commerce Data Warehouse & Automated Quality ELT',
      en: 'E-Commerce Data Warehouse & Automated Quality ELT',
    },
    subtitle: {
      vi: 'Kiến trúc Star Schema với lớp kiểm định chất lượng dữ liệu tự động',
      en: 'Star Schema Architecture with Automated Data Quality Layer',
    },
    summary: {
      vi: 'Xây dựng ELT Pipeline cho kho dữ liệu thương mại điện tử, kiểm chứng tác động của lớp Automated Data Quality lên điểm chất lượng dữ liệu và hiệu năng truy vấn trên Star Schema.',
      en: 'End-to-end e-commerce ELT data warehouse pipeline evaluating how an automated data quality validation layer improves reliability scores and Star Schema analytical query performance.',
    },
    problem: {
      vi: 'Dữ liệu thương mại điện tử thô thường chứa bản ghi trùng lặp, giá trị thiếu và sai lệch khóa ngoại làm sai kết quả báo cáo BI.',
      en: 'Raw e-commerce feeds routinely suffer from duplicate records, null keys, and schema drift that silently corrupt downstream BI reporting.',
    },
    solution: {
      vi: 'Thiết kế mô hình Star Schema kết hợp tầng kiểm tra chất lượng dữ liệu tự động trước khi nạp vào bảng fact/dimension, đồng thời đo đạc so sánh hiệu năng với pipeline truyền thống.',
      en: 'Architected a dimensional Star Schema gated by automated Python/SQL quality assertions and benchmarked query latency and quality scores against a baseline pipeline.',
    },
    highlights: {
      vi: [
        'Thiết kế đầy đủ Fact & Dimension tables chuẩn Star Schema cho dữ liệu bán lẻ',
        'Tự động hóa kiểm tra tính toàn vẹn, giá trị null và quy tắc nghiệp vụ trong luồng ELT',
        'So sánh định lượng Data Quality Score và tốc độ truy vấn phân tích',
      ],
      en: [
        'Full dimensional Fact & Dimension Star Schema modeling for retail telemetry',
        'Automated schema, uniqueness, and business-rule validation inside the ELT flow',
        'Quantitative benchmarking of data quality scores and analytical query speed',
      ],
    },
    category: 'data-ml',
    categoryLabel: {
      vi: 'Data Engineering',
      en: 'Data Engineering',
    },
    year: '2026',
    stack: ['Python', 'SQL', 'Star Schema', 'ELT Pipeline', 'Data Quality'],
    githubUrl: 'https://github.com/YenFinTechAI-Dev/ecommerce-data-warehouse',
    image: '/src/assets/images/project_data_warehouse_1795598296563.jpg',
    featured: true,
    bentoSpan: 'standard',
  },
  {
    id: 'vespera-news-ai',
    repoName: 'vespera-news-ai',
    title: {
      vi: 'VesperSignal News — Nghiên cứu & Tổng hợp Tin tức AI',
      en: 'VesperSignal News — AI-Assisted Research & News Discovery',
    },
    subtitle: {
      vi: 'Trích xuất nguồn gốc, tóm tắt AI cô đọng & lưu trữ ghi chú',
      en: 'Source Excerpts, Concise AI Summaries & Saved Research Notes',
    },
    summary: {
      vi: 'Công cụ khám phá tin tức và nghiên cứu hỗ trợ AI giúp sinh viên và nhà nghiên cứu sàng lọc nguồn, giữ trích đoạn gốc, đọc tóm tắt cô đọng và quản lý ghi chú trong một không gian thống nhất.',
      en: 'AI-assisted news discovery and research workspace that consolidates source excerpts, concise AI summaries, and saved reference notes without losing sight of original publications.',
    },
    problem: {
      vi: 'Người làm nghiên cứu phải mở hàng chục tab trình duyệt cùng lúc, khó đối chiếu nguồn tin gốc và dễ thất lạc ghi chú tham khảo.',
      en: 'Students and researchers waste hours juggling dozens of open tabs, comparing articles, and losing track of source citations.',
    },
    solution: {
      vi: 'Hợp nhất quy trình khám phá tin tức, tóm tắt AI định hướng kiểm chứng nguồn gốc và sổ ghi chú cá nhân trong một ứng dụng TypeScript mượt mà.',
      en: 'Unified source discovery, citation-first AI screening summaries, and personal note archiving inside a streamlined TypeScript web interface.',
    },
    highlights: {
      vi: [
        'Luồng làm việc liền mạch: Khám phá → Sàng lọc bằng AI → Đối chiếu nguồn gốc → Lưu ghi chú',
        'Thiết kế ưu tiên tính minh bạch nguồn trích dẫn thay vì thay thế bài báo gốc',
        'Xây dựng với kiến trúc TypeScript gọn nhẹ, phản hồi nhanh',
      ],
      en: [
        'Single unified workflow: Discover → AI Screen → Verify Source → Save Notes',
        'Verification-first design preserving original excerpts alongside summaries',
        'Clean TypeScript frontend built for sustained reading speed',
      ],
    },
    category: 'fintech-ai',
    categoryLabel: {
      vi: 'FinTech & AI',
      en: 'FinTech & AI',
    },
    year: '2026',
    stack: ['TypeScript', 'AI Summarization', 'Research Workflow', 'Web App'],
    githubUrl: 'https://github.com/YenFinTechAI-Dev/vespera-news-ai',
    featured: true,
    bentoSpan: 'standard',
  },
  {
    id: 'llms-rag-system',
    repoName: 'llms-rag-system',
    title: {
      vi: 'LLMs RAG System — Tìm kiếm Ngữ nghĩa Tri thức Nội bộ',
      en: 'LLMs RAG System — Production Semantic Retrieval Pipeline',
    },
    subtitle: {
      vi: 'Retrieval-Augmented Generation giảm ảo giác cho mô hình ngôn ngữ lớn',
      en: 'Retrieval-Augmented Generation for Factual Grounding',
    },
    summary: {
      vi: 'Hệ thống RAG định hướng triển khai thực tế kết hợp tìm kiếm ngữ nghĩa trên kho tài liệu riêng để cung cấp ngữ cảnh chính xác cho LLM trước khi sinh câu trả lời.',
      en: 'Production-oriented Retrieval-Augmented Generation architecture combining vector semantic search over private knowledge bases to ground LLM responses and curb hallucinations.',
    },
    problem: {
      vi: 'Các mô hình ngôn ngữ lớn dễ suy diễn sai lệch (hallucination) khi hỏi đáp về tài liệu chuyên ngành hoặc dữ liệu nội bộ không có trong tập huấn luyện.',
      en: 'Standalone LLMs frequently hallucinate when queried against proprietary domain knowledge or updated internal documents.',
    },
    solution: {
      vi: 'Xây dựng luồng tách đoạn tài liệu, mã hóa vector embeddings, truy hồi ngữ cảnh liên quan nhất và ràng buộc câu trả lời bám sát dữ liệu truy hồi.',
      en: 'Implemented document chunking, semantic embedding retrieval, and context-grounded prompt synthesis to maximize factual accuracy.',
    },
    highlights: {
      vi: [
        'Giảm thiểu ảo giác bằng truy hồi ngữ nghĩa theo đoạn tài liệu nội bộ',
        'Tối ưu hóa quy trình nạp tri thức và đánh giá chất lượng câu trả lời',
        'Thiết kế theo tư duy hệ thống ML sẵn sàng mở rộng thực tế',
      ],
      en: [
        'Significantly reduces hallucinations through dense semantic context retrieval',
        'Modular ingestion and retrieval pipeline built for private document sets',
        'Production-minded ML architecture ready for domain specialization',
      ],
    },
    category: 'fintech-ai',
    categoryLabel: {
      vi: 'FinTech & AI',
      en: 'FinTech & AI',
    },
    year: '2026',
    stack: ['Python', 'LLMs', 'RAG', 'Semantic Search', 'Vector Embeddings'],
    githubUrl: 'https://github.com/YenFinTechAI-Dev/llms-rag-system',
    featured: true,
    bentoSpan: 'standard',
  },
];

export const REPO_ARCHIVE: RepoArchiveItem[] = [
  {
    name: 'ml-project-explorer',
    title: {
      vi: 'ML Project Explorer & Interactive Lab',
      en: 'ML Project Explorer & Interactive Lab',
    },
    category: { vi: 'Machine Learning', en: 'Machine Learning' },
    language: 'TypeScript',
    updated: '2026-10',
    summary: {
      vi: 'Không gian tương tác trực quan hóa và khám phá kiến trúc các dự án Machine Learning.',
      en: 'Interactive browser laboratory for exploring machine learning project workflows.',
    },
    githubUrl: 'https://github.com/YenFinTechAI-Dev/ml-project-explorer',
    demoUrl: 'https://ml-project-explorer.vercel.app',
  },
  {
    name: 'flyrank-ml-training',
    title: {
      vi: 'FlyRank ML — Applied Search Intelligence',
      en: 'FlyRank ML — Applied Search Intelligence',
    },
    category: { vi: 'Search & ML', en: 'Search & ML' },
    language: 'Jupyter Notebook',
    updated: '2026-10',
    summary: {
      vi: 'Nghiên cứu và huấn luyện mô hình tối ưu xếp hạng tìm kiếm & khả năng khám phá trên Google Search.',
      en: 'Applied ML experimentation on Google Search ranking signals and content discoverability.',
    },
    githubUrl: 'https://github.com/YenFinTechAI-Dev/flyrank-ml-training',
  },
  {
    name: 'team-da-analysis',
    title: {
      vi: 'Waste Collection Operations — Power BI & DAX',
      en: 'Waste Collection Operations — Power BI & DAX',
    },
    category: { vi: 'Business Intelligence', en: 'Business Intelligence' },
    language: 'Power BI · DAX',
    updated: '2026-07',
    summary: {
      vi: 'Phân tích vận hành đội xe thu gom rác tại 4 thành phố Brazil trong 12 tháng kèm mô hình dữ liệu Power BI & báo cáo nghiệp vụ.',
      en: '12-month fleet operations analysis across 4 Brazilian cities built with Power BI data modeling, DAX, and Excel.',
    },
    githubUrl: 'https://github.com/YenFinTechAI-Dev/team-da-analysis',
  },
  {
    name: 'bank-loan-analysis',
    title: {
      vi: 'Bank Loan Approval Analysis & Streamlit Dashboard',
      en: 'Bank Loan Approval Analysis & Streamlit Dashboard',
    },
    category: { vi: 'FinTech Credit Risk', en: 'FinTech Credit Risk' },
    language: 'Python · Streamlit',
    updated: '2026-03',
    summary: {
      vi: 'Làm sạch dữ liệu, phân tích khám phá (EDA) và dashboard Streamlit tìm hiểu các yếu tố quyết định phê duyệt khoản vay ngân hàng.',
      en: 'End-to-end banking loan EDA and interactive Streamlit dashboard uncovering credit approval drivers.',
    },
    githubUrl: 'https://github.com/YenFinTechAI-Dev/bank-loan-analysis',
  },
  {
    name: 'Personal-Finance-Assistant',
    title: {
      vi: 'Personal Finance Assistant Web App',
      en: 'Personal Finance Assistant Web App',
    },
    category: { vi: 'Personal FinTech', en: 'Personal FinTech' },
    language: 'JavaScript',
    updated: '2026-05',
    summary: {
      vi: 'Ứng dụng web quản lý tài chính cá nhân theo dõi dòng tiền, ngân sách và mục tiêu tiết kiệm hàng tháng.',
      en: 'Web-based personal finance companion for tracking cashflow, budgets, and savings targets.',
    },
    githubUrl: 'https://github.com/YenFinTechAI-Dev/Personal-Finance-Assistant',
    demoUrl: 'https://personal-finance-assistant-iota.vercel.app',
  },
  {
    name: 'smart-finance-yen',
    title: {
      vi: 'Smart Finance Tracker',
      en: 'Smart Finance Tracker',
    },
    category: { vi: 'FinTech Web', en: 'FinTech Web' },
    language: 'JavaScript',
    updated: '2026-05',
    summary: {
      vi: 'Ứng dụng theo dõi chi tiêu gọn nhẹ triển khai trực tiếp trên GitHub Pages.',
      en: 'Lightweight expense and financial tracking web application hosted on GitHub Pages.',
    },
    githubUrl: 'https://github.com/YenFinTechAI-Dev/smart-finance-yen',
    demoUrl: 'https://yenfintechai-dev.github.io/smart-finance-yen/',
  },
];

export const CAPABILITIES: CapabilityTrack[] = [
  {
    index: '01',
    id: 'fintech-ai',
    title: {
      vi: 'FinTech & Hệ thống Ứng dụng AI',
      en: 'FinTech & Applied AI Systems',
    },
    focus: {
      vi: 'Quản trị rủi ro, danh mục đầu tư & RAG',
      en: 'Portfolio Intelligence, Credit Risk & RAG',
    },
    description: {
      vi: 'Kết hợp kiến thức tài chính định lượng với trí tuệ nhân tạo ứng dụng — từ dashboard tư vấn danh mục đầu tư, phân tích phê duyệt tín dụng ngân hàng đến hệ thống hỏi đáp tri thức RAG.',
      en: 'Bridging quantitative financial thinking with applied artificial intelligence—spanning portfolio advisory dashboards, credit risk analysis, and retrieval-augmented LLM pipelines.',
    },
    tools: ['Python', 'LLMs & RAG', 'Streamlit', 'Financial Modeling', 'TypeScript'],
    deliverables: {
      vi: [
        'Dashboard theo dõi danh mục đầu tư & cảnh báo rủi ro',
        'Hệ thống truy hồi ngữ nghĩa RAG trên tài liệu tài chính',
        'Mô hình phân tích phê duyệt tín dụng & chấm điểm rủi ro',
      ],
      en: [
        'Real-time investment portfolio and risk monitoring dashboards',
        'Private-knowledge RAG semantic retrieval pipelines',
        'Banking credit approval analysis and risk scoring models',
      ],
    },
    blueprintTitle: {
      vi: 'Luồng truy hồi ngữ nghĩa & đánh giá rủi ro danh mục',
      en: 'Semantic Retrieval & Portfolio Risk Pipeline',
    },
    blueprintFile: 'finvest_rag_pipeline.py',
    blueprintCode: `def evaluate_portfolio_context(holdings: list[dict], query: str):
    # 1. Compute sector concentration & drawdown exposure
    weights = normalize_weights(holdings)
    concentration_risk = sum(w ** 2 for w in weights.values())

    # 2. Retrieve verified financial filings via semantic search
    chunks = vector_store.similarity_search(query, top_k=5)

    # 3. Ground AI advisory response strictly on retrieved facts
    return synthesize_grounded_brief(
        exposure=concentration_risk,
        evidence=[c.metadata["source"] for c in chunks],
    )`,
    metrics: [
      { label: { vi: 'Dự án FinTech & AI', en: 'FinTech & AI Builds' }, value: '06+' },
      { label: { vi: 'Trọng tâm chính', en: 'Primary Stack' }, value: 'Python · TS' },
    ],
  },
  {
    index: '02',
    id: 'data-engineering',
    title: {
      vi: 'Data Engineering & Business Intelligence',
      en: 'Data Engineering & Business Intelligence',
    },
    focus: {
      vi: 'ELT Pipeline, Star Schema & Power BI',
      en: 'ELT Pipelines, Star Schema & Power BI',
    },
    description: {
      vi: 'Thiết kế kho dữ liệu chuẩn Star Schema với tầng kiểm định chất lượng dữ liệu tự động, đồng thời chuyển hóa dữ liệu thô thành báo cáo Power BI + DAX hỗ trợ ra quyết định nghiệp vụ.',
      en: 'Designing dimensional Star Schema warehouses with automated data quality gates, transforming raw operational feeds into high-trust Power BI + DAX executive dashboards.',
    },
    tools: ['SQL', 'Python ELT', 'Star Schema', 'Power BI', 'DAX', 'Excel'],
    deliverables: {
      vi: [
        'Kho dữ liệu thương mại điện tử & lớp kiểm định chất lượng tự động',
        'Mô hình dữ liệu đa chiều và bộ chỉ số DAX trên Power BI',
        'Báo cáo phân tích vận hành & trực quan hóa đa khu vực',
      ],
      en: [
        'E-commerce data warehouses with automated quality assertions',
        'Dimensional data models and DAX measure layers in Power BI',
        'Multi-region operational analytics and executive reporting',
      ],
    },
    blueprintTitle: {
      vi: 'Kiểm định chất lượng dữ liệu trước khi nạp Star Schema',
      en: 'Automated Data Quality Gate for Star Schema ELT',
    },
    blueprintFile: 'dq_star_schema_gate.sql',
    blueprintCode: `WITH staged_orders AS (
  SELECT order_id, customer_key, order_amount, order_ts
  FROM raw.ecommerce_orders
  WHERE order_id IS NOT NULL
    AND order_amount >= 0
),
deduplicated AS (
  SELECT *, ROW_NUMBER() OVER (
    PARTITION BY order_id ORDER BY order_ts DESC
  ) AS rn
  FROM staged_orders
)
INSERT INTO dw.fact_sales (order_id, customer_key, order_amount, order_ts)
SELECT order_id, customer_key, order_amount, order_ts
FROM deduplicated WHERE rn = 1;`,
    metrics: [
      { label: { vi: 'Mô hình hóa', en: 'Modeling Pattern' }, value: 'Star Schema' },
      { label: { vi: 'Công cụ BI', en: 'BI Tooling' }, value: 'Power BI · SQL' },
    ],
  },
  {
    index: '03',
    id: 'machine-learning',
    title: {
      vi: 'Machine Learning & Thực nghiệm Dữ liệu',
      en: 'Machine Learning & Experimental Labs',
    },
    focus: {
      vi: 'EDA, Huấn luyện mô hình & Nền tảng luyện tập',
      en: 'EDA, Model Training & Interactive Labs',
    },
    description: {
      vi: 'Thực hiện trọn vẹn quy trình khoa học dữ liệu từ làm sạch dữ liệu, kỹ thuật đặc trưng đến huấn luyện mô hình xếp hạng tìm kiếm và xây dựng nền tảng thực hành tương tác cho cộng đồng.',
      en: 'Executing full machine learning workflows from exploratory data analysis and feature engineering to search ranking experiments and interactive educational laboratories.',
    },
    tools: ['Jupyter Notebook', 'Scikit-learn', 'Pandas', 'Search Ranking', 'React 19'],
    deliverables: {
      vi: [
        'Thực nghiệm Applied Search Intelligence & xếp hạng tìm kiếm',
        'Nền tảng luyện tập tương tác DataForge (DA / DS / ML)',
        'Phòng thí nghiệm web khám phá dự án ML Project Explorer',
      ],
      en: [
        'Applied Search Intelligence and ranking signal experiments',
        'DataForge interactive practice platform for DA, DS, and ML',
        'ML Project Explorer browser laboratory',
      ],
    },
    blueprintTitle: {
      vi: 'Quy trình đánh giá chéo mô hình dự đoán & xếp hạng',
      en: 'Cross-Validated Feature & Ranking Pipeline',
    },
    blueprintFile: 'search_ranking_eval.py',
    blueprintCode: `pipeline = Pipeline([
    ("scaler", RobustScaler()),
    ("model", GradientBoostingClassifier(
        n_estimators=240,
        max_depth=4,
        learning_rate=0.05,
        random_state=42,
    )),
])

cv_scores = cross_val_score(
    pipeline, X_features, y_target, cv=5, scoring="roc_auc"
)
print(f"Mean ROC-AUC: {cv_scores.mean():.4f} (+/- {cv_scores.std():.4f})")`,
    metrics: [
      { label: { vi: 'Nền tảng học ML', en: 'ML Web Labs' }, value: '02 Live' },
      { label: { vi: 'Môi trường', en: 'Environment' }, value: 'Python · Jupyter' },
    ],
  },
  {
    index: '04',
    id: 'blockchain-fullstack',
    title: {
      vi: 'Full-Stack Web & Smart Contracts',
      en: 'Full-Stack Web & Smart Contracts',
    },
    focus: {
      vi: 'React, TypeScript, Solidity & Triển khai thực tế',
      en: 'React, TypeScript, Solidity & Live Deployment',
    },
    description: {
      vi: 'Đưa các ý tưởng dữ liệu và tài chính thành sản phẩm web chạy thực tế trên trình duyệt — với giao diện sạch sẽ, kiến trúc TypeScript chặt chẽ và hợp đồng thông minh Ethereum minh bạch.',
      en: 'Turning data and financial ideas into polished, browser-ready web products powered by strict TypeScript interfaces and transparent Ethereum smart contracts.',
    },
    tools: ['TypeScript', 'React', 'Tailwind CSS', 'Solidity', 'Hardhat', 'Vercel'],
    deliverables: {
      vi: [
        'Hợp đồng thông minh Solidity minh bạch giải ngân (GIV Charity)',
        'Ứng dụng web hiện đại tối ưu trải nghiệm & tốc độ tải trang',
        'Triển khai CI/CD trực tiếp trên Vercel và GitHub Pages',
      ],
      en: [
        'Transparent Solidity disbursement contracts (GIV Charity)',
        'Responsive, high-contrast TypeScript web applications',
        'Live continuous deployments on Vercel and GitHub Pages',
      ],
    },
    blueprintTitle: {
      vi: 'Hợp đồng thông minh ghi log minh bạch & giải ngân tự động',
      en: 'On-Chain Transparency & Milestone Release Contract',
    },
    blueprintFile: 'TransparencyContract.sol',
    blueprintCode: `contract TransparencyContract {
    event DisbursementLogged(
        uint256 indexed campaignId,
        address indexed recipient,
        uint256 amount,
        uint256 timestamp
    );

    function releaseMilestone(uint256 campaignId, address payable to) external {
        uint256 payout = verifiedMilestoneAmount(campaignId);
        (bool ok, ) = to.call{value: payout}("");
        require(ok, "Transfer failed");
        emit DisbursementLogged(campaignId, to, payout, block.timestamp);
    }
}`,
    metrics: [
      { label: { vi: 'Web Deploy thực tế', en: 'Live Web Deploys' }, value: '06 Apps' },
      { label: { vi: 'Ngôn ngữ chính', en: 'Core Languages' }, value: 'TS · Solidity' },
    ],
  },
];

export const MILESTONES: MilestoneItem[] = [
  {
    year: '2026',
    period: {
      vi: 'Tháng 05 – Tháng 10, 2026',
      en: 'May – Oct 2026',
    },
    title: {
      vi: 'Xây dựng hệ sinh thái sản phẩm AI, ML & Web3 thực chiến',
      en: 'Shipping End-to-End AI, ML & Web3 Products',
    },
    detail: {
      vi: 'Phát triển và triển khai hàng loạt sản phẩm hoàn chỉnh: nền tảng luyện tập DataForge (DA/DS/ML), phòng thí nghiệm ML Project Explorer, trợ lý danh mục đầu tư AI-FINVEST-ADVISOR, tin tức nghiên cứu VesperSignal News và nền tảng từ thiện Ethereum GIV Charity.',
      en: 'Architected and deployed production web apps including DataForge (DA/DS/ML practice platform), ML Project Explorer, AI-FINVEST-ADVISOR, VesperSignal News, and Ethereum-based GIV Charity.',
    },
    artifacts: ['DataForge', 'GIV Charity', 'AI-FINVEST-ADVISOR', 'VesperSignal News'],
  },
  {
    year: '2026',
    period: {
      vi: 'Tháng 01 – Tháng 07, 2026',
      en: 'Jan – Jul 2026',
    },
    title: {
      vi: 'Chuyên sâu Data Warehouse, BI & Hệ thống RAG',
      en: 'Deepening Data Engineering, BI & LLM RAG Systems',
    },
    detail: {
      vi: 'Thực hiện nghiên cứu E-Commerce Data Warehouse với lớp kiểm định chất lượng dữ liệu tự động trên Star Schema, phân tích vận hành 4 thành phố Brazil bằng Power BI + DAX, phân tích tín dụng Bank Loan và xây dựng hệ thống tìm kiếm ngữ nghĩa LLMs RAG.',
      en: 'Built an automated data-quality ELT warehouse on Star Schema, delivered a 4-city Power BI + DAX operations study, analyzed bank loan credit risk with Streamlit, and implemented a semantic LLMs RAG system.',
    },
    artifacts: ['ecommerce-data-warehouse', 'team-da-analysis', 'llms-rag-system', 'bank-loan-analysis'],
  },
  {
    year: '2025',
    period: {
      vi: 'Năm 2025',
      en: '2025',
    },
    title: {
      vi: 'Nền tảng Kỹ thuật phần mềm Python & Giao diện Web',
      en: 'Software Engineering Fundamentals in Python & Web UI',
    },
    detail: {
      vi: 'Xây dựng nền móng vững chắc về lập trình Python hướng ứng dụng (Student Management, Contact Manager), thiết kế giao diện web hiện đại và triển khai các phiên bản portfolio đầu tiên trên Vercel.',
      en: 'Solidified applied Python engineering fundamentals, responsive frontend architecture, and continuous web deployments across Vercel and GitHub Pages.',
    },
    artifacts: ['Python Systems', 'Frontend UI', 'Vercel CI/CD'],
  },
  {
    year: '2024',
    period: {
      vi: 'Tháng 06, 2024',
      en: 'June 2024',
    },
    title: {
      vi: 'Khởi đầu hành trình YenFinTechAI-Dev trên GitHub',
      en: 'Launching the YenFinTechAI-Dev GitHub Journey',
    },
    detail: {
      vi: 'Bắt đầu ghi chép hành trình lập trình công khai với định hướng giao thoa giữa Công nghệ Tài chính (FinTech), Phân tích Dữ liệu và Trí tuệ Nhân tạo.',
      en: 'Established a public engineering track record focused on the intersection of Financial Technology, Data Analytics, and Artificial Intelligence.',
    },
    artifacts: ['36+ Public Repositories', 'Open-Source Practice'],
  },
];

export const COPY = {
  vi: {
    nav: {
      about: 'Giới thiệu',
      projects: 'Dự án',
      capabilities: 'Năng lực',
      journey: 'Hành trình',
      contact: 'Liên hệ',
      cta: 'Kết nối ngay',
    },
    hero: {
      kicker: 'Trần Yến · FinTech, Data & AI Developer',
      headline: 'Xây dựng sản phẩm dữ liệu & tài chính từ nền tảng kỹ thuật thật.',
      lead: 'Mình là Trần Yến (YenFinTechAI-Dev) — phát triển các hệ thống kết hợp FinTech, trí tuệ nhân tạo, kho dữ liệu chuẩn Star Schema và ứng dụng Web hiện đại chạy thực tế trên trình duyệt.',
      primaryCta: 'Khám phá dự án',
      secondaryCta: 'Xem GitHub',
      visualCaption: 'FinTech Systems · Applied AI · Data Engineering',
      visualNote: '36+ kho mã nguồn công khai trên GitHub',
      themeLight: 'Giao diện sáng',
      themeDark: 'Giao diện tối',
    },
    stats: [
      { label: 'Kho mã nguồn công khai', sub: 'Cập nhật liên tục trên GitHub' },
      { label: 'Sản phẩm Deploy trực tiếp', sub: 'Vercel & GitHub Pages' },
      { label: 'Trụ cột chuyên môn', sub: 'FinTech · AI · Data · Web3' },
      { label: 'Hành trình xây dựng', sub: 'Từ nền tảng đến sản phẩm thật' },
    ],
    marquee: [
      'FinTech & Quản trị danh mục',
      'Machine Learning & RAG',
      'Data Warehouse & Star Schema',
      'Power BI & DAX Analytics',
      'Ethereum Smart Contracts',
      'TypeScript & React 19',
    ],
    projects: {
      sectionTitle: '01. Dự án tiêu biểu',
      sectionSubtitle:
        'Từ hệ thống quyên góp blockchain minh bạch, nền tảng luyện tập DA/DS/ML đến trợ lý đầu tư AI và kho dữ liệu ELT.',
      filters: {
        all: 'Tất cả',
        'fintech-ai': 'FinTech & AI',
        'data-ml': 'Data & ML',
        'blockchain-web': 'Blockchain & Web',
      },
      viewDetails: 'Xem chi tiết',
      liveDemo: 'Bản chạy thử',
      sourceCode: 'Mã nguồn',
      archiveTitle: 'Kho lưu trữ dự án khác trên GitHub',
      archiveSubtitle:
        'Các dự án phân tích nghiệp vụ, thực nghiệm ML và ứng dụng tài chính cá nhân công khai.',
      colProject: 'Dự án',
      colCategory: 'Lĩnh vực',
      colTech: 'Công nghệ',
      colUpdated: 'Cập nhật',
      colLinks: 'Liên kết',
    },
    modal: {
      problem: 'Bài toán đặt ra',
      solution: 'Giải pháp & Kiến trúc',
      highlights: 'Điểm nổi bật kỹ thuật',
      stack: 'Công nghệ sử dụng',
      openGithub: 'Mở kho GitHub',
      openDemo: 'Mở bản Demo trực tiếp',
      close: 'Đóng',
    },
    capabilities: {
      sectionTitle: '02. Năng lực & Kiến trúc hệ thống',
      sectionSubtitle:
        'Tập trung xây dựng hệ thống có chiều sâu kỹ thuật: dữ liệu sạch, mô hình có kiểm chứng và giao diện sử dụng được ngay.',
      deliverablesLabel: 'Hạng mục triển khai',
      blueprintHint: 'Chọn lĩnh vực để xem bản thiết kế kiến trúc tương ứng',
    },
    journey: {
      sectionTitle: '03. Hành trình & Triết lý làm việc',
      sectionSubtitle:
        'Học sâu từ bản chất hệ thống, kiểm chứng bằng dữ liệu định lượng và luôn đóng gói thành sản phẩm có thể trải nghiệm trực tiếp.',
      manifestoTitle: 'Làm kỹ thuật có chiều sâu, không làm cho có.',
      manifestoBody:
        'Mỗi dự án trên GitHub đều bắt đầu từ một câu hỏi thực tế: làm sao để dòng tiền từ thiện minh bạch hơn trên blockchain, làm sao tự động kiểm định chất lượng dữ liệu trước khi vào Data Warehouse, hay làm sao giúp người học dữ liệu thực hành bài bản hơn. Mình ưu tiên mã nguồn rõ ràng, kiến trúc bền vững và giao diện tối giản giàu thông tin.',
      principles: [
        {
          title: 'Dữ liệu sạch trước khi mô hình hóa',
          desc: 'Chất lượng phân tích và AI luôn bắt đầu từ bước làm sạch, kiểm định ràng buộc và hiểu sâu nghiệp vụ.',
        },
        {
          title: 'Kiểm chứng bằng sản phẩm chạy thật',
          desc: 'Mọi ý tưởng đều được đưa lên trình duyệt, triển khai thực tế và công khai mã nguồn để kiểm chứng.',
        },
        {
          title: 'Giao diện rõ ràng, tôn trọng sự tập trung',
          desc: 'Thiết kế hệ thống phân cấp thị giác mạch lạc, tối ưu tốc độ đọc và khả năng tương tác.',
        },
      ],
    },
    contact: {
      sectionTitle: '04. Kết nối & Hợp tác',
      sectionSubtitle:
        'Mở lòng đón nhận cơ hội thực tập, dự án FinTech / Data / AI hoặc trao đổi chuyên môn cùng cộng đồng kỹ sư.',
      directTitle: 'Kênh liên hệ trực tiếp',
      copyEmail: 'Sao chép email',
      copied: 'Đã sao chép',
      githubCta: 'Trang GitHub cá nhân',
      formTitle: 'Gửi lời nhắn nhanh',
      nameLabel: 'Họ và tên',
      namePlaceholder: 'Nguyễn Minh Anh',
      emailLabel: 'Email liên hệ',
      emailPlaceholder: 'ban@congty.com',
      topicLabel: 'Nội dung trao đổi',
      topicPlaceholder: 'Chia sẻ về vị trí, dự án hoặc ý tưởng bạn muốn cùng hợp tác...',
      submit: 'Gửi lời nhắn',
      successTitle: 'Đã ghi nhận lời nhắn của bạn',
      successBody:
        'Cảm ơn bạn đã kết nối! Bạn cũng có thể mở trình gửi mail trực tiếp bên dưới nếu muốn gửi ngay tới hộp thư của Trần Yến.',
      openMailClient: 'Mở ứng dụng Email',
      sendAnother: 'Gửi lời nhắn khác',
      errorRequired: 'Vui lòng điền đầy đủ họ tên, email hợp lệ và nội dung trao đổi.',
    },
    footer: {
      tagline: 'FinTech, Data Engineering & Applied AI Portfolio.',
      backToTop: 'Lên đầu trang',
      rights: 'Xây dựng từ dữ liệu thực tế trên GitHub YenFinTechAI-Dev.',
    },
  },
  en: {
    nav: {
      about: 'About',
      projects: 'Projects',
      capabilities: 'Capabilities',
      journey: 'Journey',
      contact: 'Contact',
      cta: 'Get in Touch',
    },
    hero: {
      kicker: 'Trần Yến · FinTech, Data & AI Developer',
      headline: 'Engineering real financial & data products from first principles.',
      lead: 'I am Trần Yến (YenFinTechAI-Dev) — building practical software across FinTech, applied AI, Star Schema data warehouses, and modern TypeScript web applications deployed live in the browser.',
      primaryCta: 'Explore Projects',
      secondaryCta: 'GitHub Profile',
      visualCaption: 'FinTech Systems · Applied AI · Data Engineering',
      visualNote: '36+ public repositories on GitHub',
      themeLight: 'Light mode',
      themeDark: 'Dark mode',
    },
    stats: [
      { label: 'Public Repositories', sub: 'Actively maintained on GitHub' },
      { label: 'Live Web Deployments', sub: 'Vercel & GitHub Pages' },
      { label: 'Core Domains', sub: 'FinTech · AI · Data · Web3' },
      { label: 'Engineering Track', sub: 'From fundamentals to shipped apps' },
    ],
    marquee: [
      'FinTech & Portfolio Analytics',
      'Machine Learning & RAG',
      'Data Warehouse & Star Schema',
      'Power BI & DAX Modeling',
      'Ethereum Smart Contracts',
      'TypeScript & React 19',
    ],
    projects: {
      sectionTitle: '01. Selected Works',
      sectionSubtitle:
        'From transparent Ethereum charity contracts and an interactive DA/DS/ML practice platform to AI portfolio advisory and ELT data warehouses.',
      filters: {
        all: 'All',
        'fintech-ai': 'FinTech & AI',
        'data-ml': 'Data & ML',
        'blockchain-web': 'Blockchain & Web',
      },
      viewDetails: 'Case Study',
      liveDemo: 'Live Demo',
      sourceCode: 'Source',
      archiveTitle: 'Additional GitHub Repositories',
      archiveSubtitle:
        'Public analytical studies, ML experiments, and personal finance web applications.',
      colProject: 'Project',
      colCategory: 'Domain',
      colTech: 'Stack',
      colUpdated: 'Updated',
      colLinks: 'Links',
    },
    modal: {
      problem: 'The Problem',
      solution: 'Architecture & Solution',
      highlights: 'Key Technical Highlights',
      stack: 'Technology Stack',
      openGithub: 'View on GitHub',
      openDemo: 'Launch Live Demo',
      close: 'Close',
    },
    capabilities: {
      sectionTitle: '02. Core Capabilities & Architecture',
      sectionSubtitle:
        'Focused on engineering depth: reliable data pipelines, validated models, and crisp interfaces built for real usage.',
      deliverablesLabel: 'Core Deliverables',
      blueprintHint: 'Select a track to inspect its technical architecture blueprint',
    },
    journey: {
      sectionTitle: '03. Journey & Engineering Philosophy',
      sectionSubtitle:
        'Learn from systems fundamentals, validate with quantitative data, and always ship interactive products people can inspect.',
      manifestoTitle: 'Depth over shortcuts. Real products over toy demos.',
      manifestoBody:
        'Every repository on my GitHub starts from a concrete real-world question: how to make charitable disbursements verifiable on Ethereum, how to automate data quality checks before loading a Star Schema warehouse, or how to help aspiring data engineers practice systematically. I care about clean architecture, measurable outcomes, and calm, high-clarity interfaces.',
      principles: [
        {
          title: 'Clean data precedes every model',
          desc: 'Reliable analytics and AI begin with strict validation rules, schema integrity, and business-domain clarity.',
        },
        {
          title: 'Prove ideas through live deployments',
          desc: 'Every concept is shipped to the browser and backed by open, inspectable GitHub repositories.',
        },
        {
          title: 'Focused, high-contrast UI/UX',
          desc: 'Clear typographic hierarchy and purposeful visual structure that respect user attention.',
        },
      ],
    },
    contact: {
      sectionTitle: '04. Contact & Collaboration',
      sectionSubtitle:
        'Open to internships, FinTech / Data / AI engineering collaborations, and technical discussions.',
      directTitle: 'Direct Channels',
      copyEmail: 'Copy email',
      copied: 'Copied',
      githubCta: 'Visit GitHub Profile',
      formTitle: 'Send a Quick Note',
      nameLabel: 'Your Name',
      namePlaceholder: 'Alex Nguyen',
      emailLabel: 'Email Address',
      emailPlaceholder: 'you@company.com',
      topicLabel: 'Message',
      topicPlaceholder: 'Share details about a role, project, or collaboration idea...',
      submit: 'Send Message',
      successTitle: 'Message Prepared',
      successBody:
        'Thank you for reaching out. You can also launch your email client below to send this note directly to Trần Yến.',
      openMailClient: 'Open Mail Client',
      sendAnother: 'Send another message',
      errorRequired: 'Please enter your name, a valid email address, and a message.',
    },
    footer: {
      tagline: 'FinTech, Data Engineering & Applied AI Portfolio.',
      backToTop: 'Back to top',
      rights: 'Built from live public work on GitHub YenFinTechAI-Dev.',
    },
  },
};
