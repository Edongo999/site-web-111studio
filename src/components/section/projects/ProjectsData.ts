
// src/components/section/projects/ProjectsData.ts

import { Project } from "@/components/ui/ProjectCard";
import { useTranslation } from "react-i18next";

export const useProjectsData = (): Project[] => {
  const { t } = useTranslation();

  return [
    // =====================================================
    // MARIAGES
    // =====================================================

    {
      title: t("projects.items.mariage1.title"),
      description: t("projects.items.mariage1.description"),
      results: t("projects.items.mariage1.results"),
      medias: [
        { type: "image", src: "/images/Mariage1/mariage10.webp" },
        { type: "image", src: "/images/Mariage1/mariage11.webp" },
        { type: "image", src: "/images/Mariage1/mariage12.webp" },
        { type: "image", src: "/images/Mariage1/mariage13.webp" },
        { type: "image", src: "/images/Mariage1/mariage14.webp" },
        { type: "image", src: "/images/Mariage1/mariage15.webp" },
        { type: "image", src: "/images/Mariage1/mariage16.webp" },
        { type: "image", src: "/images/Mariage1/mariage17.webp" },
        { type: "image", src: "/images/Mariage1/mariage18.webp" },
        { type: "image", src: "/images/Mariage1/mariage19.webp" },
        { type: "image", src: "/images/Mariage1/mariage101.webp" },
        { type: "image", src: "/images/Mariage1/mariage102.webp" },
        { type: "image", src: "/images/Mariage1/mariage103.webp" },
        { type: "image", src: "/images/Mariage1/mariage104.webp" },
        { type: "image", src: "/images/Mariage1/mariage105.webp" },
        { type: "image", src: "/images/Mariage1/mariage106.webp" },
        { type: "image", src: "/images/Mariage1/mariage107.webp" },
        { type: "image", src: "/images/Mariage1/mariage108.webp" },
        { type: "image", src: "/images/Mariage1/mariage109.webp" },
        { type: "image", src: "/images/Mariage1/mariage1010.webp" },
        { type: "image", src: "/images/Mariage1/mariage1011.webp" },
        { type: "image", src: "/images/Mariage1/mariage1012.webp" },
      ],
      category: "wedding",
      cardId: "mariage-0",
    },

    {
      title: t("projects.items.mariage2.title"),
      description: t("projects.items.mariage2.description"),
      results: t("projects.items.mariage2.results"),
      medias: [
        { type: "image", src: "/images/Mariage2/mariage2.webp" },
        { type: "image", src: "/images/Mariage2/mariage21.webp" },
        { type: "image", src: "/images/Mariage2/mariage22.webp" },
        { type: "image", src: "/images/Mariage2/mariage23.webp" },
        { type: "image", src: "/images/Mariage2/mariage24.webp" },
        { type: "image", src: "/images/Mariage2/mariage25.webp" },
      ],
      category: "wedding",
      cardId: "mariage-1",
    },

    {
      title: t("projects.items.mariage3.title"),
      description: t("projects.items.mariage3.description"),
      results: t("projects.items.mariage3.results"),
      medias: [
        { type: "image", src: "/images/Mariage3/mariage30.webp" },
        { type: "image", src: "/images/Mariage3/mariage31.webp" },
        { type: "image", src: "/images/Mariage3/mariage32.webp" },
        { type: "image", src: "/images/Mariage3/mariage33.webp" },
        { type: "image", src: "/images/Mariage3/mariage34.webp" },
        { type: "image", src: "/images/Mariage3/mariage35.webp" },
        { type: "image", src: "/images/Mariage3/mariage36.webp" },
        { type: "image", src: "/images/Mariage3/mariage37.webp" },
        { type: "image", src: "/images/Mariage3/mariage38.webp" },
        { type: "image", src: "/images/Mariage3/mariage39.webp" },
        { type: "image", src: "/images/Mariage3/mariage301.webp" },
        { type: "image", src: "/images/Mariage3/mariage302.webp" },
        { type: "image", src: "/images/Mariage3/mariage304.webp" },
        { type: "image", src: "/images/Mariage3/mariage305.webp" },
        { type: "image", src: "/images/Mariage3/mariage306.webp" },
        { type: "image", src: "/images/Mariage3/mariage308.webp" },
        { type: "image", src: "/images/Mariage3/mariage309.webp" },
        { type: "image", src: "/images/Mariage3/mariage310.webp" },
        { type: "image", src: "/images/Mariage3/mariage311.webp" },
        { type: "image", src: "/images/Mariage3/mariage312.webp" },
      ],
      category: "wedding",
      cardId: "mariage-3",
    },

    {
      title: t("projects.items.mariage4.title"),
      description: t("projects.items.mariage4.description"),
      results: t("projects.items.mariage4.results"),
      medias: [
        { type: "image", src: "/images/Mariage4/mariage40.webp" },
        { type: "image", src: "/images/Mariage4/mariage41.webp" },
        { type: "image", src: "/images/Mariage4/mariage42.webp" },
        { type: "image", src: "/images/Mariage4/mariage43.webp" },

        // ⚠️ Tu avais mis "video" avec un fichier .webp.
        // Je le laisse en image pour éviter un problème de lecture vidéo.
        { type: "image", src: "/images/Mariage4/mariage44.webp" },

        { type: "image", src: "/images/Mariage4/mariage45.webp" },
        { type: "image", src: "/images/Mariage4/mariage46.webp" },
        { type: "image", src: "/images/Mariage4/mariage47.webp" },
        { type: "image", src: "/images/Mariage4/mariage48.webp" },
        { type: "image", src: "/images/Mariage4/mariage49.webp" },
        { type: "image", src: "/images/Mariage4/mariage401.webp" },
      ],
      category: "wedding",
      cardId: "mariage-4",
    },

    {
      title: t("projects.items.mariage5.title"),
      description: t("projects.items.mariage5.description"),
      results: t("projects.items.mariage5.results"),
      medias: [
        { type: "image", src: "/images/Mariage5/image5.webp" },
        { type: "image", src: "/images/Mariage5/image51.webp" },
        { type: "image", src: "/images/Mariage5/image52.webp" },
        { type: "image", src: "/images/Mariage5/image53.webp" },
        { type: "image", src: "/images/Mariage5/image54.webp" },
        { type: "image", src: "/images/Mariage5/image55.webp" },
        { type: "image", src: "/images/Mariage5/image56.webp" },
        { type: "image", src: "/images/Mariage5/image57.webp" },
        { type: "image", src: "/images/Mariage5/image58.webp" },
        { type: "image", src: "/images/Mariage5/image59.webp" },
      ],
      category: "wedding",
      cardId: "mariage-5",
    },

    {
      title: t("projects.items.mariage6.title"),
      description: t("projects.items.mariage6.description"),
      results: t("projects.items.mariage6.results"),
      medias: [
        { type: "image", src: "/images/Mariage6/images60.webp" },
        { type: "image", src: "/images/Mariage6/images61.webp" },
        { type: "image", src: "/images/Mariage6/images62.webp" },
        { type: "image", src: "/images/Mariage6/images63.webp" },
        { type: "image", src: "/images/Mariage6/images64.webp" },
        { type: "image", src: "/images/Mariage6/images65.webp" },
        { type: "image", src: "/images/Mariage6/images60.webp" },
        { type: "image", src: "/images/Mariage6/images67.webp" },
        { type: "image", src: "/images/Mariage6/images68.webp" },
        { type: "image", src: "/images/Mariage6/images69.webp" },
        { type: "image", src: "/images/Mariage6/images601.webp" },
        { type: "image", src: "/images/Mariage6/images602.webp" },
        { type: "image", src: "/images/Mariage6/images603.webp" },
        { type: "image", src: "/images/Mariage6/images604.webp" },
      ],
      category: "wedding",
      cardId: "mariage-6",
    },

    // =====================================================
    // PORTRAITS
    // =====================================================

    {
      title: t("projects.items.portrait1.title"),
      description: t("projects.items.portrait1.description"),
      results: t("projects.items.portrait1.results"),
      medias: [
        { type: "image", src: "/images/Portrait1/portrait0.webp" },
        { type: "image", src: "/images/Portrait1/portrait1.webp" },
        { type: "image", src: "/images/Portrait1/portrait2.webp" },
        { type: "image", src: "/images/Portrait1/portrait3.webp" },
        { type: "image", src: "/images/Portrait1/portrait4.webp" },
        { type: "image", src: "/images/Portrait1/portrait5.webp" },
        { type: "image", src: "/images/Portrait1/portrait6.webp" },
        { type: "image", src: "/images/Portrait1/portrait7.webp" },
        { type: "image", src: "/images/Portrait1/portrait8.webp" },
        { type: "image", src: "/images/Portrait1/portrait9.webp" },
        { type: "image", src: "/images/Portrait1/portrait10.webp" },
        { type: "image", src: "/images/Portrait1/portrait11.webp" },
        { type: "image", src: "/images/Portrait1/portrait12.webp" },
        { type: "image", src: "/images/Portrait1/portrait13.webp" },
        { type: "image", src: "/images/Portrait1/portrait14.webp" },
        { type: "image", src: "/images/Portrait1/portrait15.webp" },
        { type: "image", src: "/images/Portrait1/portrait16.webp" },
      ],
      category: "portrait",
      cardId: "portrait-0",
    },

    {
      title: t("projects.items.portrait2.title"),
      description: t("projects.items.portrait2.description"),
      results: t("projects.items.portrait2.results"),
      medias: [
        { type: "image", src: "/images/Portrait2/portrait20.webp" },
        { type: "image", src: "/images/Portrait2/portrait21.webp" },
        { type: "image", src: "/images/Portrait2/portrait22.webp" },
        { type: "image", src: "/images/Portrait2/portrait23.webp" },
        { type: "image", src: "/images/Portrait2/portrait24.webp" },
        { type: "image", src: "/images/Portrait2/portrait25.webp" },
      ],
      category: "portrait",
      cardId: "portrait-1",
    },

    {
      title: t("projects.items.portrait3.title"),
      description: t("projects.items.portrait3.description"),
      results: t("projects.items.portrait3.results"),
      medias: [
        { type: "image", src: "/images/Portrait3/portrait30.webp" },
        { type: "image", src: "/images/Portrait3/portrait31.webp" },
        { type: "image", src: "/images/Portrait3/portrait32.webp" },
        { type: "image", src: "/images/Portrait3/portrait33.webp" },
        { type: "image", src: "/images/Portrait3/portrait34.webp" },
        { type: "image", src: "/images/Portrait3/portrait35.webp" },
      ],
      category: "portrait",
      cardId: "portrait-2",
    },

    // =====================================================
    // ARTISTIQUE
    // =====================================================

    {
      title: t("projects.items.artistique1.title"),
      description: t("projects.items.artistique1.description"),
      results: t("projects.items.artistique1.results"),
      medias: [
        { type: "image", src: "/images/Artistique1/artistique10.webp" },
        { type: "image", src: "/images/Artistique1/artistique11.webp" },
        { type: "image", src: "/images/Artistique1/artistique12.webp" },
        { type: "image", src: "/images/Artistique1/artistique13.webp" },
        { type: "image", src: "/images/Artistique1/artistique14.webp" },
        { type: "image", src: "/images/Artistique1/artistique15.webp" },
        { type: "image", src: "/images/Artistique1/artistique16.webp" },
      ],
      category: "artistic",
      cardId: "artistique-0",
    },

    {
      title: t("projects.items.artistique2.title"),
      description: t("projects.items.artistique2.description"),
      results: t("projects.items.artistique2.results"),
      medias: [
        { type: "image", src: "/images/Artistique2/artistique20.webp" },
        { type: "image", src: "/images/Artistique2/artistique21.webp" },
        { type: "image", src: "/images/Artistique2/artistique23.webp" },
        { type: "image", src: "/images/Artistique2/artistique24.webp" },
        { type: "image", src: "/images/Artistique2/artistique25.webp" },
        { type: "image", src: "/images/Artistique2/artistique26.webp" },
      ],
      category: "artistic",
      cardId: "artistique-1",
    },

    {
      title: t("projects.items.artistique3.title"),
      description: t("projects.items.artistique3.description"),
      results: t("projects.items.artistique3.results"),
      medias: [
        { type: "image", src: "/images/Artistique3/artistique30.webp" },
        { type: "image", src: "/images/Artistique3/artistique31.webp" },
        { type: "image", src: "/images/Artistique3/artistique32.webp" },
        { type: "image", src: "/images/Artistique3/artistique33.webp" },
        { type: "image", src: "/images/Artistique3/artistique34.webp" },
        { type: "image", src: "/images/Artistique3/artistique35.webp" },
        { type: "image", src: "/images/Artistique3/artistique36.webp" },
      ],
      category: "artistic",
      cardId: "artistique-2",
    },

    // =====================================================
    // ANNIVERSAIRES
    // =====================================================

    {
      title: t("projects.items.anniversaire1.title"),
      description: t("projects.items.anniversaire1.description"),
      results: t("projects.items.anniversaire1.results"),
      medias: [
        { type: "image", src: "/images/Anniversaire1/anniv10.webp" },
        { type: "image", src: "/images/Anniversaire1/anniv11.webp" },
      ],
      category: "birthday",
      cardId: "anniversaire-0",
    },

    {
      title: t("projects.items.anniversaire2.title"),
      description: t("projects.items.anniversaire2.description"),
      results: t("projects.items.anniversaire2.results"),
      medias: [
        { type: "image", src: "/images/Anniversaire2/anniv3.webp" },
        { type: "image", src: "/images/Anniversaire2/anniv1.webp" },
      ],
      category: "birthday",
      cardId: "anniversaire-1",
    },

    {
      title: t("projects.items.anniversaire3.title"),
      description: t("projects.items.anniversaire3.description"),
      results: t("projects.items.anniversaire3.results"),
      medias: [
        { type: "image", src: "/images/Anniversaire3/anniv3.webp" },
        { type: "image", src: "/images/Anniversaire3/anniv1.webp" },
        { type: "image", src: "/images/Anniversaire3/anniv2.webp" },
      ],
      category: "birthday",
      cardId: "anniversaire-2",
    },

    // =====================================================
    // ÉVÉNEMENTS
    // =====================================================

    {
      title: t("projects.items.evenement1.title"),
      description: t("projects.items.evenement1.description"),
      results: t("projects.items.evenement1.results"),
      medias: [
        { type: "image", src: "/images/Evenement3/even30.webp" },
        { type: "image", src: "/images/Evenement3/even31.webp" },
        { type: "image", src: "/images/Evenement3/even32.webp" },
        { type: "image", src: "/images/Evenement3/even33.webp" },
        { type: "image", src: "/images/Evenement3/even34.webp" },
        { type: "image", src: "/images/Evenement3/even35.webp" },
        { type: "image", src: "/images/Evenement3/even36.webp" },
      ],
      category: "event",
      cardId: "evenement-0",
    },

    {
      title: t("projects.items.evenement2.title"),
      description: t("projects.items.evenement2.description"),
      results: t("projects.items.evenement2.results"),
      medias: [
        { type: "image", src: "/images/Evenement2/even20.webp" },
        { type: "image", src: "/images/Evenement2/even21.webp" },
        { type: "image", src: "/images/Evenement2/even22.webp" },
        { type: "image", src: "/images/Evenement2/even23.webp" },
        { type: "image", src: "/images/Evenement2/even24.webp" },
        { type: "image", src: "/images/Evenement2/even25.webp" },
      ],
      category: "event",
      cardId: "evenement-1",
    },

    {
      title: t("projects.items.evenement3.title"),
      description: t("projects.items.evenement3.description"),
      results: t("projects.items.evenement3.results"),
      medias: [
        { type: "image", src: "/images/Evenement1/even10.webp" },
        { type: "image", src: "/images/Evenement1/even11.webp" },
        { type: "image", src: "/images/Evenement1/even12.webp" },
        { type: "image", src: "/images/Evenement1/even13.webp" },
        { type: "image", src: "/images/Evenement1/even14.webp" },
        { type: "image", src: "/images/Evenement1/even15.webp" },
        { type: "image", src: "/images/Evenement1/even16.webp" },
        { type: "image", src: "/images/Evenement1/even17.webp" },
        { type: "image", src: "/images/Evenement1/even18.webp" },
        { type: "image", src: "/images/Evenement1/even19.webp" },
      ],
      category: "event",
      cardId: "evenement-2",
    },
    
    // =====================================================
    // SHOOTINGS GROSSESSES et couple
    // =====================================================
    {
  title: t("projects.items.shooting1.title"),
  description: t("projects.items.shooting1.description"),
  results: t("projects.items.shooting1.results"),
  medias: [
    { type: "image", src: "/images/shooting_couple/couple2.webp" },
    { type: "image", src: "/images/shooting_couple/couple3.webp" },
    { type: "image", src: "/images/shooting_couple/couple4.webp" },
    { type: "image", src: "/images/shooting_couple/couple5.webp" },
    { type: "image", src: "/images/shooting_couple/couple6.webp" },
    { type: "image", src: "/images/shooting_couple/couple7.webp" },
    { type: "image", src: "/images/shooting_couple/couple8.webp" },
    { type: "image", src: "/images/shooting_couple/couple9.webp" },
  ],
  category: "shooting",
  cardId: "shooting-0",
},
     {
  title: t("projects.items.shooting2.title"),
  description: t("projects.items.shooting2.description"),
  results: t("projects.items.shooting2.results"),
  medias: [
    { type: "image", src: "/images/grossesse/grossese.webp" },
    { type: "image", src: "/images/grossesse/grossese2.webp" },
    { type: "image", src: "/images/grossesse/grossese3.webp" },
    { type: "image", src: "/images/grossesse/grossese4.webp" },
    { type: "image", src: "/images/grossesse/grossese5.webp" },
    { type: "image", src: "/images/grossesse/grossese6.webp" },
    { type: "image", src: "/images/grossesse/grossese7.webp" },
    { type: "image", src: "/images/grossesse/grossese8.webp" },
    { type: "image", src: "/images/grossesse/grossese9.webp" },
    { type: "image", src: "/images/grossesse/grossese10.webp" },
    { type: "image", src: "/images/grossesse/grossesse11.webp" },
    { type: "image", src: "/images/grossesse/grossesse12.webp" },
    { type: "image", src: "/images/grossesse/grossesse13.webp" },
  ],
  category: "shooting",
  cardId: "shooting-1",
},
  
 // =====================================================
    // BRANDING
    // =====================================================
    {
  title: t("projects.items.branding1.title"),
  description: t("projects.items.branding1.description"),
  results: t("projects.items.branding1.results"),
  medias: [
    { type: "image", src: "/images/Branding1/branding1.webp" },
    { type: "image", src: "/images/Branding1/branding2.webp" },
    { type: "image", src: "/images/Branding1/branding3.webp" },
    { type: "image", src: "/images/Branding1/branding4.webp" },
    { type: "image", src: "/images/Branding1/branding5.webp" },
    { type: "image", src: "/images/Branding1/branding6.webp" },
    { type: "image", src: "/images/Branding1/branding7.webp" },
    { type: "image", src: "/images/Branding1/branding8.webp" },
    { type: "image", src: "/images/Branding1/branding9.webp" },
  ],
  category: "branding",
  cardId: "branding-0",
},
    {
  title: t("projects.items.branding2.title"),
  description: t("projects.items.branding2.description"),
  results: t("projects.items.branding2.results"),
  medias: [
    { type: "image", src: "/images/Branding2/branding1.webp" },
    { type: "image", src: "/images/Branding2/branding2.webp" },
    { type: "image", src: "/images/Branding2/branding3.webp" },
    { type: "image", src: "/images/Branding2/branding4.webp" },
    { type: "image", src: "/images/Branding2/branding5.webp" },
    { type: "image", src: "/images/Branding2/branding6.webp" },
    { type: "image", src: "/images/Branding2/branding7.webp" },
    { type: "image", src: "/images/Branding2/branding8.webp" },
    { type: "image", src: "/images/Branding2/branding9.webp" },
  ],
  category: "branding",
  cardId: "branding-0",
},

  ];
};

