const main = document.querySelector("#Doctime");
const retarded = document.querySelector("#Docdate");
setInterval((e) => {
  const time = new Date();
  const hours24 = time.getHours();
  const minutesOdd = time.getMinutes();
  const Date2 = time.toDateString();
    console.log("nishank")

  let Obj = {
    0: "12",
    1: "01",
    2: "02",
    3: "03",
    4: "04",
    5: "05",
    6: "06",
    7: "07",
    8: "08",
    9: "09",
    10: "10",
    11: "11",
    12: "12",
    13: "1",
    14: "2",
    15: "3",
    16: "4",
    17: "5",
    18: "6",
    19: "7",
    20: "8",
    21: "9",
    22: "10",
    23: "11",
    24: "12",
  };
  let minObj = {
    1: "01",
    2: "02",
    3: "03",
    4: "04",
    5: "05",
    6: "06",
    7: "07",
    8: "08",
    9: "09",
    10: "10",
    11: "11",
    12: "12",
    13: "13",
    14: "14",
    15: "15",
    16: "16",
    17: "17",
    18: "18",
    19: "19",
    20: "20",
    21: "21",
    22: "22",
    23: "23",
    24: "24",
    25: "25",
    26: "26",
    27: "27",
    28: "28",
    29: "29",
    30: "30",
    31: "31",
    32: "32",
    33: "33",
    34: "34",
    35: "35",
    36: "36",
    37: "37",
    38: "38",
    39: "39",
    40: "40",
    41: "41",
    42: "42",
    43: "43",
    44: "44",
    45: "45",
    46: "46",
    47: "47",
    48: "48",
    49: "49",
    50: "50",
    51: "51",
    52: "52",
    53: "53",
    54: "54",
    55: "55",
    56: "56",
    57: "57",
    58: "58",
    59: "59",
    60: "60",
  };
  let secObj = {
    0: "00",
    1: "01",
    2: "02",
    3: "03",
    4: "04",
    5: "05",
    6: "06",
    7: "07",
    8: "08",
    9: "09",
    10: "10",
    11: "11",
    12: "12",
    13: "13",
    14: "14",
    15: "15",
    16: "16",
    17: "17",
    18: "18",
    19: "19",
    20: "20",
    21: "21",
    22: "22",
    23: "23",
    24: "24",
    25: "25",
    26: "26",
    27: "27",
    28: "28",
    29: "29",
    30: "30",
    31: "31",
    32: "32",
    33: "33",
    34: "34",
    35: "35",
    36: "36",
    37: "37",
    38: "38",
    39: "39",
    40: "40",
    41: "41",
    42: "42",
    43: "43",
    44: "44",
    45: "45",
    46: "46",
    47: "47",
    48: "48",
    49: "49",
    50: "50",
    51: "51",
    52: "52",
    53: "53",
    54: "54",
    55: "55",
    56: "56",
    57: "57",
    58: "58",
    59: "59",
    60: "60",
  };

  let hours = Obj[hours24];
  let minutes = minObj[minutesOdd];
  let secondsOdd = time.getSeconds();
  let seconds = secObj[secondsOdd];

  main.innerHTML = `${hours}:${minutes}:${seconds}`;
  retarded.innerHTML = `${Date2}`;

  if (hours24 >= 5 && hours24 < 8) {
    main.style.color = "#FFD700";
    retarded.style.color = "#FFD700";
  } else if (hours24 >= 8 && hours24 < 12) {
    main.style.color = "#00BFFF";
    retarded.style.color = "#00BFFF";
  } else if (hours24 >= 12 && hours24 < 17) {
    main.style.color = "#FF8C00";
    retarded.style.color = "#FF8C00";
  } else if (hours24 >= 17 && hours24 < 20) {
    main.style.color = "#FF4500";
    retarded.style.color = "#FF4500";
  } else if (hours24 >= 20 && hours24 < 22) {
    main.style.color = "#00FFFF";
    retarded.style.color = "#00FFFF";
  } else if (hours24 >= 22 || hours24 < 5) {
    main.style.color = "#9370DB";
    retarded.style.color = "#9370DB";
  }
}, 1000);
