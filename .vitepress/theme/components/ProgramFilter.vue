<script setup>
import { computed, ref } from 'vue'
import { useData } from 'vitepress'

const props = defineProps({
  type: { type: String, default: 'wp' }
})

const { lang } = useData()

const activeCategory = ref('all')

const filterCategories = [
  { key: 'all', zh: '全部', en: 'All' },
  { key: 'tech', zh: '工程 / 技术', en: 'Engineering / Tech' },
  { key: 'culture', zh: '语言 / 文化', en: 'Language / Culture' },
  { key: 'business', zh: '商业 / 管理', en: 'Business / Management' },
  { key: 'arts', zh: '艺术 / 人文', en: 'Arts / Humanities' },
]

const categoryLabel = (cat) => {
  const c = filterCategories.find(f => f.key === cat)
  return c ? (lang.value === 'en-US' ? c.en : c.zh) : cat
}

const wpPrograms = [
  {
    id: 'argentina-itba',
    image: 'https://smse.sjtu.edu.cn/storage/ji/web/ipcn/page/2026/05/f94672bd643e55f1fd18a9fff2243985.jpg',
    categories: ['tech', 'culture'],
    zh: {
      title: '阿根廷 -- 布宜诺斯艾利斯理工学院（ITBA）',
      duration: '5 周（1 月初至 2 月初）',
      eligibility: '所有学生',
      places: '20 人',
      fee: '约 45,000 RMB（含住宿）',
      courses: [
        { name: '数据分析（Data Analytics）', note: '课程等效 STAT4710J', desc: '涵盖数据库、数据分析与可视化，使用 IBM InfoSphere、SQL Server、MicroStrategy 等工具。建议具备编程基础及集合论 / 数理逻辑基础。' },
        { name: '创新与数字商业（Innovation & Digital Business）', note: '新课，待审批', desc: '' },
        { name: '西班牙语 A1 + 拉美文化', note: '3 学分，IB-HU', desc: '通过西班牙语课程与文化研习沉浸式体验阿根廷文化。探访当地文化地标、品尝特色美食、与本地学生交流互动。' },
      ],
    },
    en: {
      title: 'Argentina -- Instituto Tecnologico de Buenos Aires (ITBA)',
      duration: '5 weeks (early Jan -- early Feb)',
      eligibility: 'All students',
      places: '20 spots',
      fee: '~45,000 RMB (accommodation included)',
      courses: [
        { name: 'Data Analytics', note: 'Course equivalent: STAT4710J', desc: 'Covers databases, data analytics, and visualization using IBM InfoSphere, SQL Server, MicroStrategy, and other tools. Programming fundamentals and set theory / mathematical logic recommended.' },
        { name: 'Innovation & Digital Business', note: 'New course, pending approval', desc: '' },
        { name: 'Spanish A1 + Latin American Culture', note: '3 credits, IB-HU', desc: 'Immersive experience in Argentine culture through Spanish language study and cultural exploration. Visit local cultural landmarks, sample regional cuisine, and interact with local students.' },
      ],
    },
  },
  {
    id: 'egypt-cairo',
    image: 'https://smse.sjtu.edu.cn/storage/ji/web/ipcn/page/2026/05/f180c8bc98cc30ad8aec6894e8fe79cd.jpg',
    categories: ['culture'],
    zh: {
      title: '埃及 -- 开罗大学',
      duration: '3 周（1 月下旬至 2 月中旬）',
      eligibility: '所有学生',
      places: '20 人',
      fee: '约 20,000 RMB（含住宿）',
      courses: [
        { name: '考古学 / 阿拉伯文化 / 环境研究', note: '新课，待审批，预计 2-3 学分 IB', desc: '' },
      ],
    },
    en: {
      title: 'Egypt -- Cairo University',
      duration: '3 weeks (late Jan -- mid Feb)',
      eligibility: 'All students',
      places: '20 spots',
      fee: '~20,000 RMB (accommodation included)',
      courses: [
        { name: 'Archaeology / Arabic Culture / Environmental Studies', note: 'New course, pending approval, estimated 2-3 IB credits', desc: '' },
      ],
    },
  },
  {
    id: 'germany-tu-berlin-language',
    image: 'https://smse.sjtu.edu.cn/storage/ji/web/ipcn/page/2026/05/e99ae9e5334af869e20c0f993122c6f6.jpg',
    categories: ['culture'],
    zh: {
      title: '德国 -- 柏林工业大学（TU Berlin）语言项目',
      duration: '4 周（1 月初至 2 月初）',
      eligibility: '所有学生',
      places: '35 人',
      fee: '约 30,000 RMB（含住宿）',
      courses: [
        { name: '德语 A1', note: '4 学分，IB-HU（课程内容等效 GER1100J）', desc: '4 周强化德语，侧重实用基础沟通能力。配套参观国会大厦、波茨坦 / 德累斯顿一日游等文化活动。' },
      ],
    },
    en: {
      title: 'Germany -- TU Berlin (Language Program)',
      duration: '4 weeks (early Jan -- early Feb)',
      eligibility: 'All students',
      places: '35 spots',
      fee: '~30,000 RMB (accommodation included)',
      courses: [
        { name: 'German Language A1', note: '4 credits, IB-HU (equivalent to GER1100J)', desc: '4-week intensive German focusing on practical foundational communication skills. Includes visits to the Reichstag and day trips to Potsdam/Dresden.' },
      ],
    },
  },
  {
    id: 'germany-tu-berlin-tech',
    image: 'https://smse.sjtu.edu.cn/storage/ji/web/ipcn/page/2026/05/e99ae9e5334af869e20c0f993122c6f6.jpg',
    categories: ['tech'],
    zh: {
      title: '德国 -- 柏林工业大学（TU Berlin）技术项目',
      duration: '4 周（1 月初至 2 月初）',
      eligibility: '大二及以上学生',
      places: '35 人',
      fee: '30,000 - 35,000 RMB（视选课而定，含住宿）',
      courses: [
        { name: 'CanSat 卫星模型实践', note: '4 学分，FTE 300-level', desc: '设计、制作微型卫星并火箭发射实地测试。' },
        { name: 'Python 商业数据科学导论', note: '4 学分，FTE 400-level；可作为 DS 辅修选修', desc: '运用 Python 进行统计、ML、信息可视化与数据分析。不可与 ECE4450J 同时计入学分。' },
        { name: '虚拟现实与增强现实游戏开发', note: '4 学分，FTE 400-level', desc: '使用 Unity 引擎搭建 XR 应用。' },
        { name: '可持续建筑：原理与建模', note: '4 学分，IB-PD', desc: '可持续建筑的设计与评估。' },
      ],
    },
    en: {
      title: 'Germany -- TU Berlin (Technical Program)',
      duration: '4 weeks (early Jan -- early Feb)',
      eligibility: 'Sophomores and above',
      places: '35 spots',
      fee: '30,000 - 35,000 RMB (depends on course, accommodation included)',
      courses: [
        { name: 'CanSat: Hands-on Satellite Design', note: '4 credits, FTE 300-level', desc: 'Design, build a miniature satellite, and conduct a rocket launch field test.' },
        { name: 'Introduction to Business Data Science with Python', note: '4 credits, FTE 400-level; DS minor elective', desc: 'Statistics, ML, information visualization, and data analysis using Python. Cannot receive technical/minor credits together with ECE4450J.' },
        { name: 'Gaming for Virtual and Augmented Reality', note: '4 credits, FTE 400-level', desc: 'Build XR applications using the Unity engine.' },
        { name: 'Sustainable Building Design', note: '4 credits, IB-PD', desc: 'Design and assessment of sustainable buildings.' },
      ],
    },
  },
  {
    id: 'france-utt',
    image: 'https://smse.sjtu.edu.cn/storage/ji/web/ipcn/page/2026/05/34e8da50c4edf3d6416506f5cacae004.jpg',
    categories: ['culture', 'business'],
    zh: {
      title: '法国 -- 特鲁瓦技术大学（UTT）',
      duration: '4 周（1 月中旬至 2 月中旬）',
      eligibility: '大二及以上学生',
      places: '20 人',
      fee: '免学费；住宿约 6,000 RMB（需自行预付）',
      courses: [
        { name: '外语法语课程', note: '6 学分，IB-HU', desc: '根据水平分班，零基础到高级。' },
        { name: '可持续管理心理社会技能', note: '2 学分，IB-PD', desc: '沟通、团队协作、领导力、决策。' },
      ],
    },
    en: {
      title: 'France -- Universite de Technologie de Troyes (UTT)',
      duration: '4 weeks (mid Jan -- mid Feb)',
      eligibility: 'Sophomores and above',
      places: '20 spots',
      fee: 'Tuition-free; accommodation ~6,000 RMB (self-paid in advance)',
      courses: [
        { name: 'French as a Foreign Language', note: '6 credits, IB-HU', desc: 'Placement-based, from beginner to advanced.' },
        { name: 'Psychosocial Skills for Sustainable Management', note: '2 credits, IB-PD', desc: 'Communication, teamwork, leadership, decision-making.' },
      ],
    },
  },
  {
    id: 'korea-korea-univ',
    image: 'https://smse.sjtu.edu.cn/storage/ji/web/ipcn/page/2026/05/484e1ea82ca6e942ed68549d02dd07a1.jpg',
    categories: ['tech', 'culture', 'business'],
    zh: {
      title: '韩国 -- 高丽大学',
      duration: '3 周（12 月下旬至 1 月中旬）',
      eligibility: '所有学生（最多可选 4 学分）',
      places: '25 人',
      fee: '约 25,000 RMB（含住宿，按 2 门课程计）',
      courses: [
        { name: '语言科学与人工智能', note: '新课，待审批', desc: '' },
        { name: '韩流娱乐：跨越边界的文化浪潮', note: '2 学分，IB-SS', desc: '' },
        { name: '初级韩语 I 或 II', note: '2 学分，IB-HU', desc: '' },
        { name: '韩国媒体与流行文化', note: '2 学分，IB-SS', desc: '' },
        { name: '社会心理学', note: '2 学分，IB-SS', desc: '' },
      ],
    },
    en: {
      title: 'South Korea -- Korea University',
      duration: '3 weeks (late Dec -- mid Jan)',
      eligibility: 'All students (max 4 credits)',
      places: '25 spots',
      fee: '~25,000 RMB (accommodation included, based on 2 courses)',
      courses: [
        { name: 'Science of Language and Artificial Intelligence', note: 'New course, pending approval', desc: '' },
        { name: 'Korean Entertainment: A Cultural Wave Beyond Borders', note: '2 credits, IB-SS', desc: '' },
        { name: 'Beginning Korean I or II', note: '2 credits, IB-HU', desc: '' },
        { name: 'Media & Popular Culture in Korea', note: '2 credits, IB-SS', desc: '' },
        { name: 'Social Psychology', note: '2 credits, IB-SS', desc: '' },
      ],
    },
  },
  {
    id: 'croatia-zagreb',
    image: 'https://smse.sjtu.edu.cn/storage/ji/web/ipcn/page/2026/05/f7533c2d1376c7f9d76d80a54f9ee810.jpg',
    categories: ['business', 'tech'],
    zh: {
      title: '克罗地亚 -- 萨格勒布大学',
      duration: '5 周（1 月初至 2 月中旬）',
      eligibility: '所有学生',
      places: '30 人',
      fee: '约 25,000 RMB（含住宿）',
      courses: [
        { name: '模块一（萨格勒布 + 杜布罗夫尼克各一周）', note: '2 学分，IB-PD；管理学辅修选修', desc: '金融与会计 + 创新管理。金融市场、财务报表分析、法务会计、创意生成、设计思维、商业模式、知识产权。' },
        { name: '模块二（萨格勒布两周）', note: '2 学分，IB-PD；管理学辅修选修', desc: '市场营销与品牌建设 + 创新与人工智能。消费者行为、品牌管理、颠覆性创新、AI 对产业的重塑。' },
      ],
    },
    en: {
      title: 'Croatia -- University of Zagreb',
      duration: '5 weeks (early Jan -- mid Feb)',
      eligibility: 'All students',
      places: '30 spots',
      fee: '~25,000 RMB (accommodation included)',
      courses: [
        { name: 'Module 1 (Zagreb + Dubrovnik, one week each)', note: '2 credits, IB-PD; Management Minor Elective', desc: 'Finance & Accounting + Innovation Management. Financial markets, statement analysis, forensic accounting, idea generation, design thinking, business models, IP.' },
        { name: 'Module 2 (Zagreb, two weeks)', note: '2 credits, IB-PD; Management Minor Elective', desc: 'Marketing & Branding + Innovations & AI. Consumer behavior, brand management, disruptive innovation, AI\'s transformation of industries.' },
      ],
    },
  },
  {
    id: 'japan-ritsumeikan',
    image: 'https://smse.sjtu.edu.cn/storage/ji/web/ipcn/page/2026/05/6ef049c7ce398eba73affdfa1b4adce4.jpg',
    categories: ['culture'],
    zh: {
      title: '日本 -- 立命馆大学',
      duration: '约 5 周（1 月初至 2 月中旬）',
      eligibility: '所有学生',
      places: '30 人',
      fee: '约 25,000 RMB（含住宿）',
      courses: [
        { name: '日语 Level 1 / Level 2', note: '5 学分，IB-HU（课程内容等效 JAPN1100J / JAPN1110J）', desc: '系统学习日语，含 1 周自由行时间。' },
      ],
    },
    en: {
      title: 'Japan -- Ritsumeikan University',
      duration: '~5 weeks (early Jan -- mid Feb)',
      eligibility: 'All students',
      places: '30 spots',
      fee: '~25,000 RMB (accommodation included)',
      courses: [
        { name: 'Japanese Language Level 1 / Level 2', note: '5 credits, IB-HU (equivalent to JAPN1100J / JAPN1110J)', desc: 'Systematic Japanese language study, includes 1 week of free travel.' },
      ],
    },
  },
  {
    id: 'japan-sophia',
    image: 'https://smse.sjtu.edu.cn/storage/ji/web/ipcn/page/2026/05/0e1a41680a173d526b83ecd2d11bf74a.jpg',
    categories: ['culture', 'business'],
    zh: {
      title: '日本 -- 上智大学',
      duration: '4 周（1 月初至 2 月初）',
      eligibility: '大二及以上学生（最多可选 6 学分）',
      places: '20 人',
      fee: '约 11,000 - 15,000 RMB（视选课数而定；住宿自理）',
      courses: [
        { name: '日语 1A / 1B / 2', note: '等效 JAPN1100J / JAPN1110J', desc: '' },
        { name: '日本媒体与当代热点', note: '2 学分，IB-SS', desc: '' },
        { name: '日本近代史', note: '2 学分，IB-SS', desc: '' },
        { name: '日本当代文化与社会', note: '2 学分，IB-SS', desc: '' },
        { name: '茶道与日本文化', note: '2 学分，IB-Art', desc: '' },
      ],
    },
    en: {
      title: 'Japan -- Sophia University',
      duration: '4 weeks (early Jan -- early Feb)',
      eligibility: 'Sophomores and above (max 6 credits)',
      places: '20 spots',
      fee: '~11,000-15,000 RMB (depends on course load; accommodation self-organized)',
      courses: [
        { name: 'Japanese 1A / 1B / 2', note: 'Equivalent to JAPN1100J / JAPN1110J', desc: '' },
        { name: 'Media and Contemporary Issues in Japan', note: '2 credits, IB-SS', desc: '' },
        { name: 'Modern History of Japan', note: '2 credits, IB-SS', desc: '' },
        { name: 'Contemporary Japanese Culture and Society', note: '2 credits, IB-SS', desc: '' },
        { name: 'Chado, the Way of Tea and Japanese Culture', note: '2 credits, IB-Art', desc: '' },
      ],
    },
  },
  {
    id: 'spain-navarra',
    image: 'https://smse.sjtu.edu.cn/storage/ji/web/ipcn/page/2026/05/1841026d96a2d1734a145f1dcd8d2c73.jpg',
    categories: ['culture', 'tech'],
    zh: {
      title: '西班牙 -- 纳瓦拉大学（双校区）',
      duration: '4 周（1 月中旬至 2 月中旬）',
      eligibility: '大二及以上学生',
      places: '25 人',
      fee: '约 30,000 RMB（含住宿）',
      courses: [
        { name: '西班牙语', note: '3 学分，IB-HU -- 潘普洛纳校区', desc: '' },
        { name: '机器学习与人工智能算法', note: '新课，待审批 -- 圣塞巴斯蒂安校区', desc: '使用 Python 及 Scikit-learn、TensorFlow 实现 ML/AI 模型。先修：基础编程（Python 优先）、基础统计学与线性代数。含企业参访（Multiverse Computing）。' },
      ],
    },
    en: {
      title: 'Spain -- Universidad de Navarra (2 campuses)',
      duration: '4 weeks (mid Jan -- mid Feb)',
      eligibility: 'Sophomores and above',
      places: '25 spots',
      fee: '~30,000 RMB (accommodation included)',
      courses: [
        { name: 'Spanish', note: '3 credits, IB-HU -- Pamplona campus', desc: '' },
        { name: 'Algorithms for Machine Learning and AI', note: 'New course, pending approval -- San Sebastian campus', desc: 'Implement ML/AI models using Python with Scikit-learn and TensorFlow. Prerequisites: Basic programming (Python preferred), basic statistics and linear algebra. Includes company visit (Multiverse Computing).' },
      ],
    },
  },
  {
    id: 'newzealand-auckland',
    image: 'https://smse.sjtu.edu.cn/storage/ji/web/ipcn/page/2026/05/6bcdac5d79a242ff6b5d7b553717bb78.jpg',
    categories: ['tech'],
    zh: {
      title: '新西兰 -- 奥克兰大学',
      duration: '约 7 周（1 月初至 2 月中旬，不含自由行周）',
      eligibility: '所有学生',
      places: '20 人',
      fee: '约 40,000 RMB（含住宿）',
      courses: [
        { name: 'STATS 330 - 统计建模', note: '4 学分，FTE 300-level；可作为 DS 辅修选修', desc: '广义线性模型（GLM）、多元回归、逻辑回归，使用 R 语言。配套毛利文化体验日、怀赫科岛一日游等文化活动。' },
      ],
    },
    en: {
      title: 'New Zealand -- University of Auckland',
      duration: '~7 weeks (early Jan -- mid Feb, no free travel week)',
      eligibility: 'All students',
      places: '20 spots',
      fee: '~40,000 RMB (accommodation included)',
      courses: [
        { name: 'STATS 330 - Statistical Modelling', note: '4 credits, FTE 300-level; DS minor elective', desc: 'Generalized linear models (GLM), multiple regression, logistic regression, using R. Includes Maori cultural experience day and Waiheke Island day trip.' },
      ],
    },
  },
  {
    id: 'hungary-pecs',
    image: 'https://smse.sjtu.edu.cn/storage/ji/web/ipcn/page/2026/05/ae2faf2998f57a87a0a34cc76c1ba26f.jpg',
    categories: ['arts'],
    zh: {
      title: '匈牙利 -- 佩奇大学',
      duration: '4 周（1 月中旬至 2 月初）',
      eligibility: '所有学生',
      places: '30 人',
      fee: '约 30,000 RMB（含住宿）',
      courses: [
        { name: '欧洲艺术与文化 -- 以中东欧城镇为视角', note: '3 学分，IB-Art', desc: '跨学科课程，探索欧洲思想文化史，涵盖历史学、哲学、艺术史、建筑学等。含博物馆、世界遗产地参观。可便捷前往罗马、维也纳、布达佩斯等欧洲城市。' },
      ],
    },
    en: {
      title: 'Hungary -- University of Pecs',
      duration: '4 weeks (mid Jan -- early Feb)',
      eligibility: 'All students',
      places: '30 spots',
      fee: '~30,000 RMB (accommodation included)',
      courses: [
        { name: 'European Art and Culture -- Through the Perspective of a Middle-European Town', note: '3 credits, IB-Art', desc: 'An interdisciplinary course exploring European intellectual and cultural history, covering history, philosophy, art history, architecture, and more. Includes visits to museums and UNESCO World Heritage sites. Convenient access to Rome, Vienna, Budapest, and other European cities.' },
      ],
    },
  },
  {
    id: 'uk-ucl',
    image: 'https://smse.sjtu.edu.cn/storage/ji/web/ipcn/page/2026/05/e7d0fae9eacd319cc520ba1434656658.jpg',
    categories: ['tech'],
    zh: {
      title: '英国 -- 伦敦大学学院（UCL）',
      duration: '3 周（1 月中旬至 2 月初）',
      eligibility: '所有学生',
      places: '25 人',
      fee: '约 45,000 RMB（含住宿）',
      courses: [
        { name: '机器人学（Robotics）', note: '新课，待审批；预计 3 学分，FTE 300-level', desc: '教学在 UCL 东校区（伦敦斯特拉特福）开展。含剑桥大学、牛津大学参访。' },
      ],
    },
    en: {
      title: 'United Kingdom -- University College London (UCL)',
      duration: '3 weeks (mid Jan -- early Feb)',
      eligibility: 'All students',
      places: '25 spots',
      fee: '~45,000 RMB (accommodation included)',
      courses: [
        { name: 'Robotics', note: 'New course, pending approval; expected 3 credits, FTE 300-level', desc: 'Teaching takes place at UCL East (Stratford, London). Includes visits to the University of Cambridge and University of Oxford.' },
      ],
    },
  },
]

const dwpPrograms = [
  {
    id: 'dwp-sustainable-design',
    image: 'https://smse.sjtu.edu.cn/storage/ji/web/ipcn/page/2026/05/f3b7abbecb52ca2721064c83fe7253cb.jpg',
    categories: ['arts'],
    zh: {
      title: '可持续发展设计',
      courseCode: 'BUS2551J',
      credits: '2 学分，IB-PD（计入创业辅修实践要求）',
      dates: '12 月下旬，约 10 天',
      instructor: 'Kwee-Yan Teh',
      location: '海南三亚（与 SJTU 海南研究院合作）',
      desc: '本课程为行动导向型学习课程，学生将以团队形式运用设计技能，满足创业机构与社区合作组织的可持续发展需求。包含访谈、沉浸式调研、原型制作、实地考察与参访。',
    },
    en: {
      title: 'Design for Sustainable Development',
      courseCode: 'BUS2551J',
      credits: '2 credits, IB-PD (counts toward Minor in Entrepreneurship practicum)',
      dates: 'Late December, ~10 days',
      instructor: 'Kwee-Yan Teh',
      location: 'Sanya, Hainan (with SJTU Hainan Research Institute)',
      desc: 'An action-oriented learning course where students work in teams to apply design skills to meet the sustainability needs of entrepreneurial ventures and community partner organizations. Includes interviews, immersive research, prototyping, field trips, and site visits.',
    },
  },
  {
    id: 'dwp-digital-photography',
    image: 'https://smse.sjtu.edu.cn/storage/ji/web/ipcn/page/2026/05/9965e69d5ca40d22f4d76fcaa8a99bc4.png',
    categories: ['arts'],
    zh: {
      title: '数码摄影 -- 镜头下的丽江',
      courseCode: 'ART2550J',
      credits: '2 学分，IB-ART',
      dates: '12 月底至 1 月初，约 12 天',
      instructor: 'Manuel Charlemagne',
      location: '广西',
      desc: '带领学生走进中国的城市与自然旷野，用镜头探索自然之美与人文景观，学习运用摄影技巧捕捉与呈现最佳风景。',
    },
    en: {
      title: 'Digital Photography -- Exploring the Charm of Lijiang through the Lens',
      courseCode: 'ART2550J',
      credits: '2 credits, IB-ART',
      dates: 'Late Dec -- early Jan, ~12 days',
      instructor: 'Manuel Charlemagne',
      location: 'Guangxi',
      desc: 'Take students into China\'s urban and natural landscapes to explore the beauty of nature and human scenery through the lens, learning photography techniques to capture and present the best views.',
    },
  },
  {
    id: 'dwp-chinese-history',
    image: 'https://smse.sjtu.edu.cn/storage/ji/web/ipcn/page/2026/05/5578d4bb439a3fa620bc2653503d88cc.png',
    categories: ['culture'],
    zh: {
      title: '中国历史实地研习 -- 丝绸之路探秘',
      courseCode: 'HIS1010J',
      credits: '2 学分，IB-SS',
      dates: '12 月底至 1 月初，约 12 天',
      instructor: '徐彤（Tong Xu）',
      location: '乌鲁木齐、吐鲁番、敦煌、嘉峪关、银川',
      desc: '沿丝绸之路探访新疆、甘肃、宁夏等地，通过与历史主题密切相关的地点进行体验式学习，拓展并深化对中国历史的认知。强调沉浸式亲历历史。',
    },
    en: {
      title: 'Field Study in Chinese History -- Silk Road Adventures',
      courseCode: 'HIS1010J',
      credits: '2 credits, IB-SS',
      dates: 'Late Dec -- early Jan, ~12 days',
      instructor: 'Tong Xu (徐彤)',
      location: 'Urumqi, Turpan, Dunhuang, Jiayuguan, Yinchuan',
      desc: 'Explore Xinjiang, Gansu, and Ningxia along the Silk Road. Travel to locations closely tied to specific themes in Chinese history through experiential learning. Emphasizes immersive, firsthand engagement with history.',
    },
  },
  {
    id: 'dwp-computational-thinking',
    image: 'https://smse.sjtu.edu.cn/storage/ji/web/ipcn/page/2026/05/04c1aa3a83d2513a4bd45c5208d5efa2.jpg',
    categories: ['tech'],
    zh: {
      title: '数据计算思维 -- 生物多样性与宏观进化数据分析',
      courseCode: 'STAT3060J',
      credits: '2 学分，FTE',
      dates: '1 月初至 1 月中旬，约 11 天',
      instructor: '张爱琳（Ailin Zhang）',
      location: '广西',
      prerequisite: '需具备 Python 基础（numpy, scikit-learn, pandas 等）',
      desc: '聚焦数据科学的计算应用，包括使用数值软件处理数据、数据建模、向利益相关方呈现研究结果。学生可独立将所学技能应用于自选数据集。',
    },
    en: {
      title: 'Computational Thinking with Data -- Data Driven Analysis in Biodiversity & Macroevolution',
      courseCode: 'STAT3060J',
      credits: '2 credits, FTE',
      dates: 'Early Jan -- mid Jan, ~11 days',
      instructor: 'Ailin Zhang (张爱琳)',
      location: 'Guangxi',
      prerequisite: 'Basic Python experience required (numpy, scikit-learn, pandas, etc.)',
      desc: 'Focuses on computational applications in data science, including using numerical software to process data, data modeling, and presenting research findings to stakeholders. Students can independently apply the skills learned to a dataset of their choice.',
    },
  },
  {
    id: 'dwp-literary-journalism',
    image: 'https://smse.sjtu.edu.cn/storage/ji/web/ipcn/page/2026/05/a4ccd5ca792a9a7061999b8b96cc2f7e.png',
    categories: ['arts'],
    zh: {
      title: '文学新闻写作入门 -- 编织中国山水故事',
      courseCode: 'ENGL3460J',
      credits: '2 学分，IB-HU',
      dates: '12 月底至 1 月初，约 12 天',
      instructor: 'Ryan Mallory Thorpe',
      location: '广西',
      desc: '走访中国城市与偏远地区，学习旅行写作实践。需提前阅读多篇作品，通过每日写作练习与当地体验，探寻生活与文化的真相。',
    },
    en: {
      title: 'Introduction to Literary Journalism -- Weaving Stories of Chinese Rivers & Mountains',
      courseCode: 'ENGL3460J',
      credits: '2 credits, IB-HU',
      dates: 'Late Dec -- early Jan, ~12 days',
      instructor: 'Ryan Mallory Thorpe',
      location: 'Guangxi',
      desc: 'Travel to Chinese cities and remote areas to learn the practice of travel writing. Requires reading several works in advance. Through daily writing exercises and local experiences, discover truths about life and culture.',
    },
  },
  {
    id: 'dwp-shanghai-art',
    image: 'https://smse.sjtu.edu.cn/storage/ji/web/ipcn/page/2026/05/68ff1a13a5d8224a48eeaed920b3deb5.jpg',
    categories: ['arts', 'culture'],
    zh: {
      title: '艺术视角下的上海',
      courseCode: '新课',
      credits: '预计 2 学分，IB-Art',
      dates: '12 月底至 1 月初，约 12 天',
      instructor: 'Aline Chevalier',
      location: '上海',
      desc: '探索上海这座国际化多元都市的影像，了解在历史长河中塑造上海城市气质的各类艺术与思潮，并解读其背后的社会学与哲学理念。',
    },
    en: {
      title: 'Discovering Shanghai Through the Lens of Art',
      courseCode: 'New course',
      credits: 'Expected 2 credits, IB-Art',
      dates: 'Late Dec -- early Jan, ~12 days',
      instructor: 'Aline Chevalier',
      location: 'Shanghai',
      desc: 'Explore the imagery of Shanghai as a cosmopolitan and diverse metropolis, understand the various arts and ideas that have shaped Shanghai\'s urban character throughout history, and interpret the sociological and philosophical concepts behind them.',
    },
  },
]

const programs = computed(() => props.type === 'dwp' ? dwpPrograms : wpPrograms)

const filtered = computed(() => {
  if (activeCategory.value === 'all') return programs.value
  return programs.value.filter(p => p.categories.includes(activeCategory.value))
})

const countFor = (cat) => {
  if (cat === 'all') return programs.value.length
  return programs.value.filter(p => p.categories.includes(cat)).length
}

const t = (p) => (lang.value === 'en-US' ? p.en : p.zh)

const isWP = props.type === 'wp'
</script>

<template>
  <div class="program-filter">
    <div class="filter-bar">
      <button
        v-for="cat in filterCategories"
        :key="cat.key"
        :class="['filter-btn', { active: activeCategory === cat.key }]"
        @click="activeCategory = cat.key"
      >
        <span class="filter-label">{{ lang === 'en-US' ? cat.en : cat.zh }}</span>
        <span class="filter-count">{{ countFor(cat.key) }}</span>
      </button>
    </div>

    <!-- WP International Programs -->
    <div v-if="isWP" class="program-grid">
      <div v-for="p in filtered" :key="p.id" class="program-card">
        <img v-if="p.image" :src="p.image" :alt="t(p).title" class="card-img" loading="lazy" />
        <div class="card-body">
          <h4 class="card-title">{{ t(p).title }}</h4>
          <div class="card-tags">
            <span v-for="cat in p.categories" :key="cat" class="tag" @click="activeCategory = cat">
              {{ categoryLabel(cat) }}
            </span>
          </div>
          <div class="card-meta">
            <span v-if="t(p).duration" class="meta-item">
              <strong>{{ lang === 'en-US' ? 'Duration' : '时长' }}：</strong>{{ t(p).duration }}
            </span>
            <span v-if="t(p).eligibility" class="meta-item">
              <strong>{{ lang === 'en-US' ? 'Eligibility' : '招生对象' }}：</strong>{{ t(p).eligibility }}
            </span>
            <span v-if="t(p).places" class="meta-item">
              <strong>{{ lang === 'en-US' ? 'Places' : '名额' }}：</strong>{{ t(p).places }}
            </span>
            <span v-if="t(p).fee" class="meta-item fee-item">
              <strong>{{ lang === 'en-US' ? 'Fee' : '费用' }}：</strong>{{ t(p).fee }}
            </span>
          </div>
          <ul v-if="t(p).courses && t(p).courses.length" class="card-courses">
            <li v-for="c in t(p).courses" :key="c.name">
              <strong>{{ c.name }}</strong>
              <span v-if="c.note" class="course-note">（{{ c.note }}）</span>
              <span v-if="c.desc" class="course-desc">{{ c.desc }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- DWP Programs -->
    <div v-else class="program-grid">
      <div v-for="p in filtered" :key="p.id" class="program-card dwp-card">
        <img v-if="p.image" :src="p.image" :alt="t(p).title" class="card-img" loading="lazy" />
        <div class="card-body">
          <h4 class="card-title">{{ t(p).title }}</h4>
          <div class="card-tags">
            <span v-for="cat in p.categories" :key="cat" class="tag" @click="activeCategory = cat">
              {{ categoryLabel(cat) }}
            </span>
          </div>
          <div class="card-meta">
            <span v-if="t(p).courseCode" class="meta-item">
              <strong>{{ lang === 'en-US' ? 'Course' : '课号' }}：</strong>{{ t(p).courseCode }}
            </span>
            <span v-if="t(p).credits" class="meta-item">
              <strong>{{ lang === 'en-US' ? 'Credits' : '学分' }}：</strong>{{ t(p).credits }}
            </span>
            <span v-if="t(p).dates" class="meta-item">
              <strong>{{ lang === 'en-US' ? 'Dates' : '时间' }}：</strong>{{ t(p).dates }}
            </span>
            <span v-if="t(p).instructor" class="meta-item">
              <strong>{{ lang === 'en-US' ? 'Instructor' : '教师' }}：</strong>{{ t(p).instructor }}
            </span>
            <span v-if="t(p).location" class="meta-item">
              <strong>{{ lang === 'en-US' ? 'Location' : '地点' }}：</strong>{{ t(p).location }}
            </span>
            <span v-if="t(p).prerequisite" class="meta-item prereq-item">
              <strong>{{ lang === 'en-US' ? 'Prerequisite' : '先修要求' }}：</strong>{{ t(p).prerequisite }}
            </span>
          </div>
          <p class="card-desc">{{ t(p).desc }}</p>
        </div>
      </div>
    </div>

    <div v-if="!filtered.length" class="no-results">
      {{ lang === 'en-US' ? 'No programs match this category.' : '没有匹配该类别的项目。' }}
    </div>
  </div>
</template>

<style scoped>
.program-filter {
  margin: 1.5rem 0;
}

/* Filter bar */
.filter-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  padding: 0.75rem;
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  position: sticky;
  top: var(--vp-nav-height, 64px);
  z-index: 10;
}

.filter-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.4rem 0.9rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 20px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.filter-btn:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.filter-btn.active {
  background: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-white);
}

.filter-count {
  font-size: 0.75rem;
  opacity: 0.7;
}

.filter-btn.active .filter-count {
  opacity: 0.9;
}

/* Program grid */
.program-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

/* Program card */
.program-card {
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  overflow: hidden;
  background: var(--vp-c-bg);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.program-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
}

.card-img {
  width: 100%;
  height: 140px;
  object-fit: cover;
  display: block;
}

.card-body {
  padding: 0.75rem 0.9rem 0.9rem;
}

.card-title {
  font-size: 0.9rem;
  font-weight: 700;
  margin: 0 0 0.35rem;
  line-height: 1.35;
}

/* Tags */
.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin-bottom: 0.6rem;
}

.tag {
  display: inline-block;
  padding: 0.15rem 0.55rem;
  border-radius: 10px;
  font-size: 0.75rem;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  cursor: pointer;
  transition: opacity 0.15s;
}

.tag:hover {
  opacity: 0.75;
}

/* Meta */
.card-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem 0.75rem;
  margin-bottom: 0.4rem;
  font-size: 0.8rem;
  color: var(--vp-c-text-2);
}

.meta-item strong {
  color: var(--vp-c-text-1);
}

.fee-item {
  width: 100%;
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg-soft);
  padding: 0.25rem 0;
  margin-top: 0.15rem;
  border-radius: 4px;
}

.prereq-item {
  width: 100%;
  color: var(--vp-c-warning-1);
}

/* Courses */
.card-courses {
  margin: 0.35rem 0 0;
  padding-left: 1rem;
  font-size: 0.8rem;
  line-height: 1.5;
}

.card-courses li {
  margin-bottom: 0.2rem;
}

.course-note {
  color: var(--vp-c-text-3);
  font-size: 0.75rem;
}

.course-desc {
  display: block;
  color: var(--vp-c-text-2);
  font-size: 0.78rem;
  margin-top: 0.05rem;
}

/* Extras & desc */
.card-desc {
  margin: 0.35rem 0 0;
  font-size: 0.8rem;
  color: var(--vp-c-text-2);
  line-height: 1.5;
}

/* No results */
.no-results {
  text-align: center;
  padding: 2rem 1rem;
  color: var(--vp-c-text-3);
  font-size: 0.95rem;
}

/* Responsive */
@media (max-width: 640px) {
  .program-grid {
    grid-template-columns: 1fr;
  }

  .filter-bar {
    gap: 0.35rem;
    padding: 0.5rem;
  }

  .filter-btn {
    padding: 0.3rem 0.65rem;
    font-size: 0.8rem;
  }
}
</style>
