
var things = [
[
'https://i.imgur.com/Y0Dg3lxl.jpg',
'https://www.reddit.com/r/pics/comments/aggom4/my_mom_painted_this_and_said_no_one_would_like_it/'
],
[
'https://i.imgur.com/6Vjj5wn.png',
'https://www.reddit.com/r/pics/comments/agpd18/i_painted_somebodys_mom/'
],
[
'https://i.imgur.com/ZW1esng.png',
'https://www.reddit.com/r/pics/comments/aheepm/took_a_while_and_not_perfect_but_i_painted_the/'
],
[
'https://i.imgur.com/YsSdeU5.png',
'https://www.reddit.com/r/pics/comments/ahh6gm/i_painted_the_girl_who_painted_the_guy_who/'
],
[
'https://i.imgur.com/WcNbVpJ.png',
'https://www.reddit.com/r/pics/comments/ahilt8/i_painted_the_guy_who_painted_the_girl_who/'
],
[
'https://i.imgur.com/jwD2Xdfl.jpg',
'https://www.reddit.com/r/pics/comments/ahix0o/cheep_cheep_cheep_cheep_cheep/'
],
[
'https://i.imgur.com/emkZoRx.png',
'https://www.reddit.com/r/pics/comments/ahfsnu/took_an_hour_or_so_but_i_painted_the_girl_who/'
],
[
'https://i.imgur.com/md4Fmr1.png',
'https://www.reddit.com/r/pics/comments/ahh7de/bit_wonky_but_i_painted_the_woman_who_painted_the/'
],
[
'https://i.imgur.com/pJ8pxDv.jpg',
'https://www.reddit.com/r/pics/comments/ahk441/how_could_i_choose_its_multiplying/'
],
[
'https://i.imgur.com/Dg8Frep.jpg',
'https://www.reddit.com/r/pics/comments/ahlkis/when_it_sinks_in_that_i_stayed_up_most_of_the/'
],
[
'https://i.imgur.com/uAkc6vt.jpg',
'https://www.reddit.com/r/pics/comments/ahjb0t/i_didnt_like_how_reddit_treated_the_ipad_guy_so_i/'
],
[
'https://i.imgur.com/0R3i1oc.png',
'https://www.reddit.com/r/pics/comments/ahlfq9/it_took_over_9000_hours_in_ms_paint_but_i_painted/'
],
[
'https://i.imgur.com/V7rK2cg.png',
'https://www.reddit.com/r/pics/comments/ahjfie/i_drew_the_guy_who_painted_the_girl_who_painted/'
],
[
'https://i.imgur.com/QuyITp4.png',
'https://www.reddit.com/r/pics/comments/ahih49/i_cant_paint_the_guy_who_painted_the_girl_who/'
],
[
'https://i.imgur.com/xUjhAGV.png',
'https://www.reddit.com/r/pics/comments/ahi9s4/i_drew_the_guy_who_painted_the_girl_who_painted/'
],
[
'https://i.imgur.com/gM79Uwl.jpg',
'https://www.reddit.com/r/pics/comments/agpd18/i_painted_somebodys_mom/ee7zwrl/?st=jr3kuiue&sh=53e3c3bf'
],
[
'https://i.imgur.com/AK3oIZA.png',
'https://www.reddit.com/r/pics/comments/ahiq0m/someone_already_beat_me_to_it_but_heres_mine/?st=JR3KTIOX&sh=57d1fe3f'
],
[
'https://i.imgur.com/DeOySrL.png',
'https://www.reddit.com/r/pics/comments/ahmq4d/bit_shitty_but_i_painted_the_woman_who_painted/'
],
[
'https://i.imgur.com/3vZ4TjN.jpg',
'https://www.reddit.com/r/pics/comments/aheepm/took_a_while_and_not_perfect_but_i_painted_the/eeeaj5k'
],
[
'https://i.imgur.com/VUvqEe0.png',
'https://www.reddit.com/r/pics/comments/ahml4t/spent_my_whole_friday_night_trying_to_finish/'
],
[
'https://i.imgur.com/xX6HbpK.png',
'https://www.reddit.com/r/pics/comments/ahmsq8/a_drawing_of_2_paintings_of_a_painting_of_a/'
],
[
'https://i.imgur.com/0EJZbhJ.png',
'https://www.reddit.com/r/pics/comments/ahnnn2/i_havent_painted_in_two_years_and_im_glad_for_the/'
],
[
'https://i.imgur.com/zUvXd95.png',
'https://www.reddit.com/r/pics/comments/ahno49/ehhh_i_somewhat_painted_the_guy_who_painted_the/'
],
[
'https://i.imgur.com/GCYD5rC.png',
'https://www.reddit.com/r/pics/comments/ahot7g/i_painted_ushitty_watercolour_who_painted_the/'
],
[
'https://i.imgur.com/SjgM0GC.png',
'https://www.reddit.com/r/pics/comments/ahppd0/my_continuation_of_this_meme_7_hours_later/'
],
[
'https://i.imgur.com/s6cgtS2.jpg',
'https://www.reddit.com/r/pics/comments/ahr05a/bit_goofy_but_i_painted_the_guy_who_painted_the/'
]
];
var relations = {
  i: 0,
  c: [
  {
    i: 1,
    c: [
    {
      i: 2,
      c: [
      {
        i:3,
        c: [
        {
          i:4,
          c: [
            {
              i:9,
              c: [{i:21}, {i:24}]
            }
          ]
        }
        , {i:5}, {
          i:8,
          c: [
            {
              i:20
            }
          ]
        }, {i:12}, {i:13}, {i:22}]
      },
      {
        i:6,
        c: [{i:10}, {i:11}, {i:14}]
      },
      {
        i:7,
        c: [{i:8}, {
          i:17,
          c: [{i:23}, {i:25}]
        }]
      },
      {i:16},
      {i:18},
      {i:19}
      ]
    },
    {i:15}
    ]
  }
  ]
};
