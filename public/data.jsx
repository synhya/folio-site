import * as icon from 'simple-icons';

export const data = {
  "name": "Jang Wonik",
  "landing": {
    "title": [
      "ようこそ、",
      "Jang Wonikです。"
    ],
    "subtitles": [
      "始まったばかりの 🚀",
      "フルスタックエンジニア 🌐",
    ],
    "professionalDetails": [
      {
        "alt": "synhya",
        "icon": icon.siGithub,
        "link": "https://github.com/synhya"
      },
      {
        "alt": "Email",
        "icon": icon.siGmail,
        "link": "mailto:synhya98@gmail.com"
      }
    ]
  },
  "skills": {
    "言語": [
      icon.siTypescript,
      icon.siJavascript,
      icon.siHtml5,
      icon.siCss3,
      icon.siCsharp,
    ],
    "フロントエンド": [
      icon.siReact,
      icon.siNextdotjs,
      {
        ...icon.siTailwindcss,
        backgroundColor: "#06B6D4",
      },
      // {
      //   ...icon.siReactquery,
      //   backgroundColor: "#000"
      // },
      // icon.siReacthookform,
      icon.siShadcnui,
      icon.siMui,
      icon.siVercel,
    ],
    "バックエンド": [
      icon.siPostgresql,
      icon.siDrizzle,
      icon.siSupabase,
      icon.siLaravel
    ],
    "その他": [
      icon.siExpo,
      {
        ...icon.siUnity,
        backgroundColor: "#000"
      },
    ]
  },
  "projects": {
    "baseURI": "https://api.github.com/repos/synhya/",
    "repositories": [
      {
        "name": "clothes-commerce-app",
      },
      {
        "name": "bitcoin-app",
        "external": "https://bitcoin-app-zeta.vercel.app/",
      },
      {
        "name": "celeste-unity-clone"
      },
    ]
  },
  "experience": {
    "Work Experience": [

    ],
  },
  "about": {
    "description": "",
    "social": []
  },
  "theme": {
    "light": {
      "palette": {
        "type": "light",
        "background": {
          "paper": "#fff",
          "default": "#fafafa"
        }
      }
    },
    "dark": {
      "palette": {
        "type": "dark",
        "background": {
          "paper": "#303030",
          "default": "#212121"
        }
      }
    }
  }
}