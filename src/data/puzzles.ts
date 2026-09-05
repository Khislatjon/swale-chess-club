/**
 * Mini-puzzles migrated from the old swalechessclub.co.uk homepage.
 * Text is kept verbatim from the club's own write-ups; `intro` and
 * `answer` paragraphs may contain inline HTML (bold moves, links).
 */
export interface Puzzle {
  id: string;
  /** Date the puzzle was posted on the old site. */
  posted: string;
  contributor?: string;
  /** Question / context paragraphs (HTML). */
  intro: string[];
  /** Emphasised "whose move" line, when the question has one. */
  toMove?: string;
  image: string;
  /** Answer paragraphs (HTML), hidden until revealed. */
  answer: string[];
  /** Diagram shown at the top of the answer, if the original had one. */
  answerImage?: string;
  /** Second stage of a two-part puzzle, revealed inside the first answer. */
  followUp?: {
    intro: string[];
    image: string;
    answer: string[];
  };
}

export const puzzles: Puzzle[] = [
  {
    id: 'july-2026-mate-or-queen',
    posted: '25 July 2026',
    contributor: 'Trefor',
    intro: [
      'Based on the fascinating game I watched last night. White to play and either deliver mate or win lots of material, including the queen.',
    ],
    image: '/images/puzzles/SCC250726.png',
    answer: [
      '<b>1 Qxg6+!! Kxg6, 2 Bh5+ Kxh7, 3 Bf7+ Qh3, 4 Rxh3</b> checkmate!',
      'If the king declines to capture, with instead 1 &hellip;Ke6, then we have 2 Bg4+ winning the queen. Even more brutal is the preparatory 2 Nc4!, fixing the king in place and threatening 2 &hellip;Bg4#.',
    ],
  },
  {
    id: 'july-2026-best-way-forward',
    posted: '17 July 2026',
    intro: ["From a recent game at Swale Chess Club. What is White's best way forward?"],
    toMove: 'White to move.',
    image: '/images/puzzles/NNvNN170726.png',
    answer: ['<b>Nf6+!! pxN</b> forced, <b>Bxf7</b> checkmate!'],
  },
  {
    id: 'june-2026-paul-v-andrew',
    posted: '6 June 2026',
    intro: [
      'The Paul v Andrew rapid game ended in a draw, but had sharp play from both players all along the way. Here is a typical moment.',
    ],
    toMove: 'White to move.',
    image: '/images/puzzles/PHvAG060626.png',
    answer: [
      '<b>Rxc7+!!</b> The engine awards a double exclam!! Capturing while sacrificing the rook was the right idea!',
    ],
  },
  {
    id: 'may-2026-classic-situation',
    posted: '23 May 2026',
    intro: ['From a recent Swale Chess Club game.'],
    toMove: 'White to move.',
    image: '/images/puzzles/NNvNN230526.png',
    answer: [
      '<b>Bxf7+!!</b> The engine awards a double exclam!! A classic situation from the puzzle books, but bravo to White for enacting this as early as move 6 in an actual game.',
    ],
  },
  {
    id: 'april-2026-spot-the-flaw',
    posted: '18 April 2026',
    contributor: 'Trefor',
    intro: [
      'From my game v Gary. I had seen this position from a few moves before and my planned continuation, as Black, was: 25 &hellip;Bc3 skewering queen and rook, 26 Bxc4 Bxd2, 27 Bxb3 Bxe1 winning the exchange. However, can you spot the flaw?',
    ],
    toMove: '25 &hellip;Bc3, 26 Bxc4 Bxd2, 27 Bxb3 Bxe1, and White to move.',
    image: '/images/puzzles/TOvGC180426.png',
    answerImage: '/images/puzzles/TOvGC180426a.png',
    answer: [
      '<b>Bb2+!</b> Black does indeed win the exchange, but at the cost of being checkmated!',
    ],
  },
  {
    id: 'april-2026-tyrone-jefferies',
    posted: '11 April 2026',
    contributor: 'Andrew',
    intro: [
      'Folkestone again&mdash;I have the black pieces. While perusing the moves afterwards in the hotel bar with my opponent, Cecil Sloan of Greater London Chess Club, it was nice as a Swale Chess Club player to hear that GLCC runs <a href="https://www.glcc.org.uk/club_tournaments.html#2" rel="noopener">Tyrone Jefferies Rated Games</a> in memory of our two chess clubs&rsquo; mutual member. We ourselves will soon be taking part in the Swale Chess Club Rapid Championship for the Tyrone Jefferies Cup.',
      'Tyrone would no doubt have appreciated this one. What two moves should Black play here to force the win?',
    ],
    toMove: 'Black to move.',
    image: '/images/puzzles/CSvAG110426.png',
    answer: [
      '<b>Qc1+</b> and after Kg2, <b>Ne1+!</b> Checking the king away from the defence of the bishop, with unavoidable checkmate to follow.',
    ],
  },
  {
    id: 'april-2026-folkestone-best-move',
    posted: '3 April 2026',
    contributor: 'Andrew',
    intro: [
      'From the recent Folkestone congress. I found the best move here in my game with the black pieces v Rob Thompson.',
    ],
    toMove: 'Black to move.',
    image: '/images/puzzles/RTvAG030426.png',
    answer: [
      '<b>Bh3!!</b> The engine awards a double exclam!! Threatening 35 &hellip;Bxgp+, 35 Kg1 BxN+, 36 KxB Qg1 checkmate. The best White has is 35 Qc2, as played in the game, but then after RxB! the queen can&rsquo;t take back because the mate would still be on.',
    ],
  },
  {
    id: 'march-2026-accurate-finish',
    posted: '28 March 2026',
    contributor: 'Arnaud',
    intro: [
      'An accurate finish from a recent game.',
      'Part (a): What were the first three moves of the winning sequence? Black (Arnaud) to play.',
    ],
    image: '/images/puzzles/AWvNN280326.png',
    answer: [
      'The first three moves of the winning sequence were <b>1 &hellip;Nh3+, 2 Kh1 Nxf2+, 3 Kg1 Qe3.</b> Here in the game White responded with <b>4 Nf3</b> and checkmate is now unavoidable. All White had instead was Nxe4, still losing.',
    ],
    followUp: {
      intro: [
        'Part (b): After White&rsquo;s <b>4 Nf3</b> what are the concluding three moves of the winning sequence? Black (Arnaud) to move.',
      ],
      image: '/images/puzzles/AWvNN280326b.png',
      answer: [
        '<b>4 &hellip;Nh3+</b> double check<b>, 5 Kh1 Qg1+!!</b> Sacrificing the queen for checkmate&mdash;the engine awards a double exclam!!<b>, 6 Nfxg1 Nf2#</b> Smothered mate!',
      ],
    },
  },
];
