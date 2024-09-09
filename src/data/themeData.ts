import {
  FaBrandsSquareJs,
  FaBrandsPython,
  FaBrandsJava,
  FaSolidCode,
  FaSolidBook,
  FaSolidPaintbrush,
  FaSolidGlobe,
  FaSolidChartLine,
  FaSolidClock,
  FaSolidComments,
  FaSolidGraduationCap,
  FaSolidLightbulb,
  FaSolidLock,
  FaSolidRocket,
  FaSolidSchool,
  FaSolidUserTie,
  FaSolidAtom,
  FaSolidChalkboardUser,
  FaSolidComment,
} from 'solid-icons/fa';
import { AiFillProject, AiFillAccountBook } from 'solid-icons/ai';
import { ImBook, ImUsers } from 'solid-icons/im';
import {
  BiSolidCameraMovie,
  BiSolidSlideshow,
  BiRegularMath,
} from 'solid-icons/bi';
import { SiRuby, SiCplusplus } from 'solid-icons/si';

export interface Theme {
  category: string;
  themes: { title: string; icon: any }[];
}

export const themeData: Theme[] = [
  {
    category: 'プログラミング',
    themes: [
      { title: 'JavaScript', icon: FaBrandsSquareJs },
      { title: 'Python', icon: FaBrandsPython },
      { title: 'Ruby', icon: SiRuby },
      { title: 'Java', icon: FaBrandsJava },
      { title: 'C++', icon: SiCplusplus },
      { title: 'その他のプログラミング言語', icon: FaSolidCode },
    ],
  },
  {
    category: 'デザイン',
    themes: [
      { title: 'UI/UX', icon: ImUsers },
      { title: 'グラフィックデザイン', icon: FaSolidPaintbrush },
      { title: 'Webデザイン', icon: FaSolidGlobe },
      { title: '動画編集', icon: BiSolidCameraMovie },
    ],
  },
  {
    category: '資格試験',
    themes: [
      { title: 'TOEIC', icon: FaSolidGraduationCap },
      { title: 'ITパスポート', icon: FaSolidLock },
      { title: '簿記', icon: AiFillAccountBook },
      { title: '公務員試験', icon: FaSolidSchool },
      { title: 'その他の資格試験', icon: FaSolidGraduationCap },
    ],
  },
  {
    category: '読書',
    themes: [
      { title: '小説', icon: FaSolidBook },
      { title: 'ビジネス書', icon: FaSolidChartLine },
      { title: '自己啓発', icon: FaSolidLightbulb },
      { title: '専門書', icon: ImBook },
    ],
  },
  {
    category: '学生向け',
    themes: [
      { title: '数学', icon: BiRegularMath },
      { title: '物理', icon: FaSolidChalkboardUser },
      { title: '化学', icon: FaSolidAtom },
      { title: '英語', icon: FaSolidComment },
      { title: '歴史', icon: FaSolidChalkboardUser },
    ],
  },
  {
    category: 'ビジネス',
    themes: [
      { title: 'マーケティング', icon: FaSolidChartLine },
      { title: 'プロジェクト管理', icon: AiFillProject },
      { title: '起業', icon: FaSolidRocket },
      { title: 'リーダーシップ', icon: FaSolidUserTie },
    ],
  },
  {
    category: 'ライフスキル',
    themes: [
      { title: 'タイムマネジメント', icon: FaSolidClock },
      { title: 'コミュニケーション', icon: FaSolidComments },
      { title: 'プレゼンテーション', icon: BiSolidSlideshow },
      { title: 'クリティカルシンキング', icon: FaSolidLightbulb },
    ],
  },
];
