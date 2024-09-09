import {
  FaBrandsSquareJs,
  FaBrandsPython,
  FaBrandsJava,
  FaSolidBook,
  FaChalkboardTeacher,
  FaChartLine,
  FaClock,
  FaCode,
  FaComments,
  FaFileAlt,
  FaGlobe,
  FaGraduationCap,
  FaLightbulb,
  FaLock,
  FaPaintBrush,
  FaProjectDiagram,
  FaRocket,
  FaSchool,
  FaUserTie,
} from "solid-icons/fa";
import { ImBook } from "solid-icons/im";
import 
import { SiRuby, SiCplusplus } from "solid-icons/si";

export interface Theme {
  category: string;
  themes: { title: string; icon: any }[];
}

export const themeData: Theme[] = [
  {
    category: "プログラミング",
    themes: [
      { title: "JavaScript", icon: FaBrandsSquareJs },
      { title: "Python", icon: FaBrandsPython },
      { title: "Ruby", icon: SiRuby },
      { title: "Java", icon: FaBrandsJava },
      { title: "C++", icon: SiCplusplus },
      { title: "その他のプログラミング言語", icon: FaCode },
    ],
  },
  {
    category: "デザイン",
    themes: [
      { title: "UI/UX", icon: FaPaintBrush },
      { title: "グラフィックデザイン", icon: FaPaintBrush },
      { title: "Webデザイン", icon: FaGlobe },
      { title: "動画編集", icon: FaChalkboardTeacher },
    ],
  },
  {
    category: "資格試験",
    themes: [
      { title: "TOEIC", icon: FaGraduationCap },
      { title: "ITパスポート", icon: FaLock },
      { title: "簿記", icon: FaFileAlt },
      { title: "公務員試験", icon: FaSchool },
      { title: "その他の資格試験", icon: FaGraduationCap },
    ],
  },
  {
    category: "読書",
    themes: [
      { title: "小説", icon: FaSolidBook },
      { title: "ビジネス書", icon: FaChartLine },
      { title: "自己啓発", icon: FaLightbulb },
      { title: "専門書", icon: ImBook },
    ],
  },
  {
    category: "学生向け",
    themes: [
      { title: "数学", icon: FaChalkboardTeacher },
      { title: "物理", icon: FaChalkboardTeacher },
      { title: "化学", icon: FaChalkboardTeacher },
      { title: "英語", icon: FaComments },
      { title: "歴史", icon: FaChalkboardTeacher },
    ],
  },
  {
    category: "ビジネス",
    themes: [
      { title: "マーケティング", icon: FaChartLine },
      { title: "プロジェクト管理", icon: FaProjectDiagram },
      { title: "起業", icon: FaRocket },
      { title: "リーダーシップ", icon: FaUserTie },
    ],
  },
  {
    category: "ライフスキル",
    themes: [
      { title: "タイムマネジメント", icon: FaClock },
      { title: "コミュニケーション", icon: FaComments },
      { title: "プレゼンテーション", icon: FaChalkboardTeacher },
      { title: "クリティカルシンキング", icon: FaLightbulb },
    ],
  },
];
