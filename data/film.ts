// data/films.ts

export interface Film {
  id: string;
  slug: string;
  title: string;
  category: "Human Stories" | "Sociopolitical" | "Subcultures" | "Ecological";
  year: string;
  runtime: string;
  aspectRatio: string;
  location: string;
  logline: string;
  synopsis: string;
  directorNote: string;
  technicalSpecs: {
    camera: string;
    lenses: string;
    audio: string;
    colorProfile: string;
    framerate: string;
  };
  laurels: string[];
  thumbnailUrl: string;
  trailerUrl?: string;
  status: "Released" | "Festival Circuit" | "Post-Production";
}

export const WGF_FILMS: Film[] = [
  {
    id: "wgf-01",
    slug: "the-smoldering-ghats",
    title: "The Smoldering Ghats",
    category: "Human Stories",
    year: "2025",
    runtime: "28 MIN",
    aspectRatio: "2.39:1",
    location: "Manikarnika Ghat, Varanasi",
    logline: "An unscripted portrait of three generational Dom fire-keepers tending pyres along the sacred river.",
    synopsis: "Stripped of ceremonial melodrama, the camera quietly observes the relentless rhythmic endurance of Varanasi's pyre tenders across 72 continuous hours. Through natural firelight and the drone of the Ganges, the film questions mortality, inheritance, and untouchable caste memory.",
    directorNote: "Filmed entirely on 35mm equivalent focal lengths using purely available flame and ambient dawn light. Zero fill lights or artificial bounce.",
    technicalSpecs: {
      camera: "Cinema Rig (Dual Native ISO)",
      lenses: "Vintage Soviet Primes (37mm & 58mm)",
      audio: "Binaural Ambisonic Field Mics",
      colorProfile: "Log Raw / Film Emulation Print",
      framerate: "24.000 fps"
    },
    laurels: [
      "IDFA Amsterdam 2025 — Official Selection",
      "Dharamsala International Film Festival — Special Jury Prize",
      "Kashish Documentaries — Best Cinematography"
    ],
    thumbnailUrl: "https://images.unsplash.com/photo-1561359313-0639aad49ca6?auto=format&fit=crop&w=1600&q=80",
    status: "Released"
  },
  {
    id: "wgf-02",
    slug: "underground-b-side",
    title: "Underground B-Side",
    category: "Subcultures",
    year: "2026",
    runtime: "42 MIN",
    aspectRatio: "1.85:1",
    location: "Dharavi & Kurla, Mumbai",
    logline: "Inside the clandestine bedroom studio subculture rewriting Marathi and Hindi hip-hop with cassette tape sampling.",
    synopsis: "Following two self-taught teenage beatmakers cutting lo-fi samples from discarded Bollywood cassettes in a 10x10 tin shanty. An electric study of sound architecture thriving outside mainstream corporate streaming economics.",
    directorNote: "All sync audio was tracked straight onto a vintage Tascam 4-track cassette before being married back to digital masters. Gritty, high-transient, and unapologetic.",
    technicalSpecs: {
      camera: "Handheld S35 Cinema Body",
      lenses: "Ultra-compact 28mm f/2.0",
      audio: "Tascam 4-Track Cassette Field Recorder",
      colorProfile: "High Contrast Kodak Monochrome & Muted Grain",
      framerate: "24.000 fps"
    },
    laurels: [
      "Sundance Indie Episodic — Shortlist",
      "MAMI Mumbai Film Festival — Open Horizons"
    ],
    thumbnailUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1600&q=80",
    status: "Festival Circuit"
  },
  {
    id: "wgf-03",
    slug: "salt-desert-mirage",
    title: "Salt Desert Mirage",
    category: "Ecological",
    year: "2024",
    runtime: "64 MIN",
    aspectRatio: "2.39:1",
    location: "Little Rann of Kutch, Gujarat",
    logline: "Agariya salt-farming families living in blinding solar isolation across vanishing seasonal salt pans.",
    synopsis: "For eight months a year, the Agariya migrate into an endless white desert to pump brine from underground aquifers. Captured with observational stillness, the film captures the psychological weight of blinding white light, harsh heat, and systemic labor neglect.",
    directorNote: "A masterclass in slow cinema verité. We limited ourselves to ten camera setups per day, letting uninterrupted takes run up to 12 minutes without interference.",
    technicalSpecs: {
      camera: "Large Format Cinema Sensor",
      lenses: "Anamorphic 40mm & 75mm (1.5x squeeze)",
      audio: "Stereo Shotgun & Contact Vibration Sensors",
      colorProfile: "Desaturated Solar Bleach",
      framerate: "24.000 fps"
    },
    laurels: [
      "Hot Docs Toronto — International Spectrum",
      "Doc Edge New Zealand — Winner Best Environment Film",
      "Visions du Réel — Lab Selection"
    ],
    thumbnailUrl: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1600&q=80",
    status: "Released"
  },
  {
    id: "wgf-04",
    slug: "iron-spine-night-shift",
    title: "Iron Spine: Night Shift",
    category: "Sociopolitical",
    year: "2025",
    runtime: "36 MIN",
    aspectRatio: "1.66:1",
    location: "Mughalsarai Yard, Uttar Pradesh",
    logline: "The nocturnal grease-covered laborers keeping Asia's largest railway marshalling junction alive.",
    synopsis: "Between 11 PM and 6 AM, thousands of shunting workers navigate unlit tracks and 1,000-ton cargo wagons with hand torches and steel chains. A brutal, tactile documentation of industrial India operating unseen.",
    directorNote: "No interviews or direct-to-camera questioning. The narrative is driven exclusively by the acoustic slam of couplers and radio chatter between switchmen.",
    technicalSpecs: {
      camera: "Mirrorless Cinema Rig w/ Low-Light Sensor",
      lenses: "Ultra-Fast 50mm f/1.2",
      audio: "Dynamic Shure Microphones + Lavalier Harnesses",
      colorProfile: "Industrial Steel Blue & Carbon Black",
      framerate: "24.000 fps"
    },
    laurels: [
      "Sheffield DocFest — Youth Jury Nominee",
      "Kolkata International Film Festival — Documentary Panorama"
    ],
    thumbnailUrl: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1600&q=80",
    status: "Released"
  },
  {
    id: "wgf-05",
    slug: "the-last-tinsmith",
    title: "The Last Tinsmith",
    category: "Human Stories",
    year: "2026",
    runtime: "21 MIN",
    aspectRatio: "1.33:1",
    location: "Old Delhi (Purani Dilli)",
    logline: "An elderly artisan hammers obsolete kerosene lamps inside a three-foot bazaar cubby as demolition notices loom.",
    synopsis: "Shot in boxy 4:3 academy ratio to reflect the claustrophobia of Old Delhi's historic alleys, this film archives the hands, soot, and dying mechanical heritage of hand-beaten tin before modern redevelopment cleanses it.",
    directorNote: "Every hammer strike was preserved without sound suppression. The audio mix retains the dense rumble of Jama Masjid's surrounding street life.",
    technicalSpecs: {
      camera: "16mm Digital Sensor Crop",
      lenses: "Single 25mm Prime",
      audio: "Boundary Surface Mics",
      colorProfile: "Warm Tungsten & Patina Verdigris",
      framerate: "24.000 fps"
    },
    laurels: [
      "IFFI Goa — Indian Panorama Non-Feature Selection"
    ],
    thumbnailUrl: "https://images.unsplash.com/photo-1588421357574-87938a86fa28?auto=format&fit=crop&w=1600&q=80",
    status: "Festival Circuit"
  },
  {
    id: "wgf-06",
    slug: "silent-glaciers-whisper",
    title: "Silent Glaciers Whisper",
    category: "Ecological",
    year: "2026",
    runtime: "52 MIN",
    aspectRatio: "2.39:1",
    location: "Zanskar Valley, Ladakh",
    logline: "Buddhist village elders build artificial ice towers (ice stupas) to fight catastrophic mountain drought.",
    synopsis: "As Himalayan winter snowfall collapses due to warming altitudes, high-desert villages are reviving indigenous hydraulic geometry to freeze glacial meltwater into seasonal towers. An urgent collision of indigenous knowledge and climate survival.",
    directorNote: "Captured under sub-zero conditions down to -28°C. Camera batteries were body-warmed on skin between setups to preserve continuous runtime.",
    technicalSpecs: {
      camera: "Weather-Sealed 8K Cinema Brain",
      lenses: "Compact Cine Zooms (28-75mm)",
      audio: "Hydrophones & Fur Windshield Field Mics",
      colorProfile: "Glacial Cyan & High Altitude White",
      framerate: "24.000 fps"
    },
    laurels: [
      "Banff Mountain Film Festival — Nominee Best Mountain Culture",
      "Docaviv — Work In Progress Showcase"
    ],
    thumbnailUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80",
    status: "Post-Production"
  }
];




