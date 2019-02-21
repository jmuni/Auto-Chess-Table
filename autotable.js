//Author: Jerry
//Please do not distribute without my permission. I made this code for the AutoChess community to use.
//Contact Jelly#4622 on Discord for comments and concerns.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                   GLOBAL VARIABLES                                                                       //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getActiveSheet();
var spreadsheet = SpreadsheetApp.getActive();

var rangeData = sheet.getDataRange();
var lastRow = rangeData.getLastRow();
var lastCol = rangeData.getLastColumn();

function reset() {  
  sheet.getRange("F2:F24").setValue(0);
  sheet.getRange("P3:V15").setValue(0);
  sheet.getRange("F1:P25").setBackground('#ffffff');
  //gray
  sheet.getRange("A1:E1").setBackground('#7e7e7e');
  sheet.getRange("A6:E6").setBackground('#7e7e7e');
  sheet.getRange("A11:B11").setBackground('#7e7e7e');
  //green
  sheet.getRange("C11:E11").setBackground('#a5e32d');
  sheet.getRange("A16:E16").setBackground('#a5e32d');
  sheet.getRange("A21:E21").setBackground('#a5e32d');
  //blue
  sheet.getRange("A26:G26").setBackground('#00ffff');
  sheet.getRange("A31:G31").setBackground('#00ffff');
  //purple
  sheet.getRange("H26:M26").setBackground('#a261cf');
  sheet.getRange("H31:L31").setBackground('#a261cf');
  //orange
  sheet.getRange("N26:O26").setBackground('#fa912b');
  sheet.getRange("M31:O31").setBackground('#fa912b');
} 

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                START OF ADD/SUB UNITS                                                                    //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////1 COST UNITS//////////////////////////////////////////////////////////////////////////

function antiMage() {
  var temp = ss.getRange("P5").getValue()
  if(temp === 0) {
    addElf();
    addDemonHunter(); 
    sheet.getRange('A11').setBackground('#ba311c');
    sheet.getRange("P5").setValue(1);
  } else {
    subElf();
    subDemonHunter();    
    sheet.getRange('A11').setBackground('#7e7e7e');
    sheet.getRange("P5").setValue(0);
  }
}

function axe() {
  var temp = ss.getRange("Q3").getValue()
  if(temp === 0) {
    addOrc();
    addWarrior(); 
    sheet.getRange('B1').setBackground('#ba311c');
    sheet.getRange("Q3").setValue(1);
  } else {
    subOrc();
    subWarrior();    
    sheet.getRange('B1').setBackground('#7e7e7e');
    sheet.getRange("Q3").setValue(0);
  }
}

function batRider() {
  var temp = ss.getRange("S4").getValue()
  if(temp === 0) {
    addTroll();
    addKnight(); 
    sheet.getRange('D6').setBackground('#ba311c');
    sheet.getRange("S4").setValue(1);
  } else {
    subTroll();
    subKnight();    
    sheet.getRange('D6').setBackground('#7e7e7e');
    sheet.getRange("S4").setValue(0);
  }
}

function bountyHunter() {
  var temp = ss.getRange("P4").getValue()
  if(temp === 0) {
    addGoblin();
    addAssassin(); 
    sheet.getRange('A6').setBackground('#ba311c');
    sheet.getRange("P4").setValue(1);
  } else {
    subGoblin();
    subAssassin();    
    sheet.getRange('A6').setBackground('#7e7e7e');
    sheet.getRange("P4").setValue(0);
  }
}

function clockWerk() {
  var temp = ss.getRange("Q4").getValue()
  if(temp === 0) {
    addGoblin();
    addMech(); 
    sheet.getRange('B6').setBackground('#ba311c');
    sheet.getRange("Q4").setValue(1);
  } else {
    subGoblin();
    subMech();    
    sheet.getRange('B6').setBackground('#7e7e7e');
    sheet.getRange("Q4").setValue(0);
  }
}

function drowRanger() {
  var temp = ss.getRange("T3").getValue()
  if(temp === 0) {
    addUndead();
    addHunter(); 
    sheet.getRange('E1').setBackground('#ba311c');
    sheet.getRange("T3").setValue(1);
  } else {
    subUndead();
    subHunter();    
    sheet.getRange('E1').setBackground('#7e7e7e');
    sheet.getRange("T3").setValue(0);
  }
}

function enchantress() {
  var temp = ss.getRange("P3").getValue()
  if(temp === 0) {
    addBeast();
    addDruid(); 
    sheet.getRange('A1').setBackground('#ba311c');
    sheet.getRange("P3").setValue(1);
  } else {
    subBeast();
    subDruid();    
    sheet.getRange('A1').setBackground('#7e7e7e');
    sheet.getRange("P3").setValue(0);
  }
}

function ogreMagi() {
  var temp = ss.getRange("R3").getValue()
  if(temp === 0) {
    addOgre();
    addMage(); 
    sheet.getRange('C1').setBackground('#ba311c');
    sheet.getRange("R3").setValue(1);
  } else {
    subOgre();
    subMage();    
    sheet.getRange('C1').setBackground('#7e7e7e');
    sheet.getRange("R3").setValue(0);
  }
}

function shadowShaman() {
  var temp = ss.getRange("R4").getValue()
  if(temp === 0) {
    addTroll();
    addShaman(); 
    sheet.getRange('C6').setBackground('#ba311c');
    sheet.getRange("R4").setValue(1);
  } else {
    subTroll();
    subShaman();    
    sheet.getRange('C6').setBackground('#7e7e7e');
    sheet.getRange("R4").setValue(0);
  }
}

function tinker() {
  var temp = ss.getRange("T4").getValue()
  if(temp === 0) {
    addGoblin();
    addMech(); 
    sheet.getRange('E6').setBackground('#ba311c');
    sheet.getRange("T4").setValue(1);
  } else {
    subGoblin();
    subMech();    
    sheet.getRange('E6').setBackground('#7e7e7e');
    sheet.getRange("T4").setValue(0);
  }
}

function tiny() {
  var temp = ss.getRange("Q5").getValue()
  if(temp === 0) {
    addElemental();
    addWarrior(); 
    sheet.getRange('B11').setBackground('#ba311c');
    sheet.getRange("Q5").setValue(1);
  } else {
    subElemental();
    subWarrior();    
    sheet.getRange('B11').setBackground('#7e7e7e');
    sheet.getRange("Q5").setValue(0);
  }
}

function tusk() {
  var temp = ss.getRange("S3").getValue()
  if(temp === 0) {
    addBeast();
    addWarrior(); 
    sheet.getRange('D1').setBackground('#ba311c');
    sheet.getRange("S3").setValue(1);
  } else {
    subBeast();
    subWarrior();    
    sheet.getRange('D1').setBackground('#7e7e7e');
    sheet.getRange("S3").setValue(0);
  }
}

////////////////////////////////////////////////////////2 COST UNITS//////////////////////////////////////////////////////////////////////////

function beastMaster() {
  var temp = ss.getRange("S5").getValue()
  if(temp === 0) {
    addOrc();
    addHunter(); 
    sheet.getRange('D11').setBackground('#ba311c');
    sheet.getRange("S5").setValue(1);
  } else {
    subOrc();
    subHunter();    
    sheet.getRange('D11').setBackground('#ba311c');
    sheet.getRange("S5").setValue(0);
  }
}

function chaosKnight() {
  var temp = ss.getRange("P7").getValue()
  if(temp === 0) {
    addDemon();
    addKnight(); 
    sheet.getRange('A21').setBackground('#ba311c');
    sheet.getRange("P7").setValue(1);
  } else {
    subDemon();
    subKnight();    
    sheet.getRange('A21').setBackground('#a5e32d');
    sheet.getRange("P7").setValue(0);
  }
}

function crystalMaiden() {
  var temp = ss.getRange("R5").getValue()
  if(temp === 0) {
    addHuman();
    addMage(); 
    sheet.getRange('C11').setBackground('#ba311c');
    sheet.getRange("R5").setValue(1);
  } else {
    subHuman();
    subMage();    
    sheet.getRange('C11').setBackground('#a5e32d');
    sheet.getRange("R5").setValue(0);
  }
}

function furion() {
  var temp = ss.getRange("S7").getValue()
  if(temp === 0) {
    addElf();
    addDruid(); 
    sheet.getRange('D21').setBackground('#ba311c');
    sheet.getRange("S7").setValue(1);
  } else {
    subElf();
    subDruid();    
    sheet.getRange('D21').setBackground('#a5e32d');
    sheet.getRange("S7").setValue(0);
  }
}

function juggernaut() {
  var temp = ss.getRange("T5").getValue()
  if(temp === 0) {
    addOrc();
    addWarrior(); 
    sheet.getRange('E11').setBackground('#ba311c');
    sheet.getRange("T5").setValue(1);
  } else {
    subOrc();
    subWarrior();    
    sheet.getRange('E11').setBackground('#a5e32d');
    sheet.getRange("T5").setValue(0);
  }
}

function luna() {
  var temp = ss.getRange("R7").getValue()
  if(temp === 0) {
    addElf();
    addKnight();
    sheet.getRange('C21').setBackground('#ba311c');
    sheet.getRange("R7").setValue(1);
  } else {
    subElf();
    subKnight();    
    sheet.getRange('C21').setBackground('#a5e32d');
    sheet.getRange("R7").setValue(0);
  }
}

function morphling() {
  var temp = ss.getRange("T7").getValue()
  if(temp === 0) {
    addElemental();
    addAssassin(); 
    sheet.getRange('E21').setBackground('#ba311c');
    sheet.getRange("T7").setValue(1);
  } else {
    subElemental();
    subAssassin();    
    sheet.getRange('E21').setBackground('#a5e32d');
    sheet.getRange("T7").setValue(0);
  }
}

function puck() {
  var temp = ss.getRange("R6").getValue()
  if(temp === 0) {
    addElf();
    addDragon();
    addMage(); 
    sheet.getRange('C16').setBackground('#ba311c');
    sheet.getRange("R6").setValue(1);
  } else {
    subElf();
    subDragon();
    subMage();    
    sheet.getRange('C16').setBackground('#a5e32d');
    sheet.getRange("R6").setValue(0);
  }
}

function queenOfPain() {
  var temp = ss.getRange("Q6").getValue()
  if(temp === 0) {
    addDemon();
    addAssassin(); 
    sheet.getRange('B16').setBackground('#ba311c');
    sheet.getRange("Q6").setValue(1);
  } else {
    subDemon();
    subAssassin();    
    sheet.getRange('B16').setBackground('#a5e32d');
    sheet.getRange("Q6").setValue(0);
  }
}

function slardar() {
  var temp = ss.getRange("T6").getValue()
  if(temp === 0) {
    addNaga();
    addWarrior(); 
    sheet.getRange('E16').setBackground('#ba311c');
    sheet.getRange("T6").setValue(1);
  } else {
    subNaga();
    subWarrior();    
    sheet.getRange('E16').setBackground('#a5e32d');
    sheet.getRange("T6").setValue(0);
  }
}

function timbersaw() {
  var temp = ss.getRange("P6").getValue()
  if(temp === 0) {
    addGoblin();
    addMech(); 
    sheet.getRange('A16').setBackground('#ba311c');
    sheet.getRange("P6").setValue(1);
  } else {
    subGoblin();
    subMech();    
    sheet.getRange('A16').setBackground('#a5e32d');
    sheet.getRange("P6").setValue(0);
  }
}

function treantProtector() {
  var temp = ss.getRange("Q7").getValue()
  if(temp === 0) {
    addElf();
    addDruid(); 
    sheet.getRange('B21').setBackground('#ba311c');
    sheet.getRange("Q7").setValue(1);
  } else {
    subElf();
    subDruid();    
    sheet.getRange('B21').setBackground('#a5e32d');
    sheet.getRange("Q7").setValue(0);
  }
}

function witchDoctor() {
  var temp = ss.getRange("S6").getValue()
  if(temp === 0) {
    addTroll();
    addWarlock(); 
    sheet.getRange('D16').setBackground('#ba311c');
    sheet.getRange("S6").setValue(1);
  } else {
    subTroll();
    subWarlock();    
    sheet.getRange('D16').setBackground('#a5e32d');
    sheet.getRange("S6").setValue(0);
  }
}

////////////////////////////////////////////////////////3 COST UNITS//////////////////////////////////////////////////////////////////////////

function abaddon() {
  var temp = ss.getRange("P9").getValue()
  if(temp === 0) {
    addUndead();
    addKnight(); 
    sheet.getRange('A31').setBackground('#ba311c');
    sheet.getRange("P9").setValue(1);
  } else {
    subUndead();
    subKnight(); 
    sheet.getRange('A31').setBackground('#00ffff');
    sheet.getRange("P9").setValue(0);
  }
}

function lina() {
  var temp = ss.getRange("V8").getValue()
  if(temp === 0) {
    addHuman();
    addMage(); 
    sheet.getRange('G26').setBackground('#ba311c');
    sheet.getRange("V8").setValue(1);
  } else {
    subHuman();
    subMage();    
    sheet.getRange('G26').setBackground('#00ffff');
    sheet.getRange("V8").setValue(0);
  }
}

function lycan() {
  var temp = ss.getRange("P8").getValue()
  if(temp === 0) {
    addHuman();
    addBeast(); 
    addWarrior();
    sheet.getRange('A26').setBackground('#ba311c');
    sheet.getRange("P8").setValue(1);
  } else {
    subHuman();
    subBeast();    
    subWarrior();
    sheet.getRange('A26').setBackground('#00ffff');
    sheet.getRange("P8").setValue(0);
  }
}

function omniknight() {
  var temp = ss.getRange("R8").getValue()
  if(temp === 0) {
    addHuman();
    addKnight();
    sheet.getRange('C26').setBackground('#ba311c');
    sheet.getRange("R8").setValue(1);
  } else {
    subHuman();
    subKnight();    
    sheet.getRange('C26').setBackground('#00ffff');
    sheet.getRange("R8").setValue(0);
  }
}

function phantomAssassin() {
  var temp = ss.getRange("U8").getValue()
  if(temp === 0) {
    addElf();
    addAssassin(); 
    sheet.getRange('F26').setBackground('#ba311c');
    sheet.getRange("U8").setValue(1);
  } else {
    subElf();
    subAssassin();    
    sheet.getRange('F26').setBackground('#00ffff');
    sheet.getRange("U8").setValue(0);
  }
}

function razor() {
  var temp = ss.getRange("S8").getValue()
  if(temp === 0) {
    addElemental();
    addMage(); 
    sheet.getRange('D26').setBackground('#ba311c');
    sheet.getRange("S8").setValue(1);
  } else {
    subElemental();
    subMage();    
    sheet.getRange('D26').setBackground('#00ffff');
    sheet.getRange("S8").setValue(0);
  }
}

function sandKing() {
  var temp = ss.getRange("Q9").getValue()
  if(temp === 0) {
    addBeast();
    addAssassin(); 
    sheet.getRange('B31').setBackground('#ba311c');
    sheet.getRange("Q9").setValue(1);
  } else {
    subBeast();
    subAssassin();    
    sheet.getRange('B31').setBackground('#00ffff');
    sheet.getRange("Q9").setValue(0);
  }
}

function shadowFiend() {
  var temp = ss.getRange("U9").getValue()
  if(temp === 0) {
    addDemon();
    addWarlock(); 
    sheet.getRange('F31').setBackground('#ba311c');
    sheet.getRange("U9").setValue(1);
  } else {
    subDemon();
    subWarlock();    
    sheet.getRange('F31').setBackground('#00ffff');
    sheet.getRange("U9").setValue(0);
  }
}

function slark() {
  var temp = ss.getRange("R9").getValue()
  if(temp === 0) {
    addNaga();
    addAssassin();
    sheet.getRange('C31').setBackground('#ba311c');
    sheet.getRange("R9").setValue(1);
  } else {
    subNaga();
    subAssassin();    
    sheet.getRange('C31').setBackground('#00ffff');
    sheet.getRange("R9").setValue(0);
  }
}

function sniper() {
  var temp = ss.getRange("S9").getValue()
  if(temp === 0) {
    addDwarf();
    addHunter(); 
    sheet.getRange('D31').setBackground('#ba311c');
    sheet.getRange("S9").setValue(1);
  } else {
    subDwarf();
    subHunter();    
    sheet.getRange('D31').setBackground('#00ffff');
    sheet.getRange("S9").setValue(0);
  }
}

function terrorBlade() {
  var temp = ss.getRange("V9").getValue()
  if(temp === 0) {
    addDemon();
    addDemonHunter(); 
    sheet.getRange('G31').setBackground('#ba311c');
    sheet.getRange("V9").setValue(1);
  } else {
    subDemon();
    subDemonHunter();    
    sheet.getRange('G31').setBackground('#00ffff');
    sheet.getRange("V9").setValue(0);
  }
}

function venomancer() {
  var temp = ss.getRange("Q8").getValue()
  if(temp === 0) {
    addBeast();
    addWarlock(); 
    sheet.getRange('B26').setBackground('#ba311c');
    sheet.getRange("Q8").setValue(1);
  } else {
    subBeast();
    subWarlock();    
    sheet.getRange('B26').setBackground('#00ffff');
    sheet.getRange("Q8").setValue(0);
  }
}

function viper() {
  var temp = ss.getRange("T9").getValue()
  if(temp === 0) {
    addDragon();
    addAssassin(); 
    sheet.getRange('E31').setBackground('#ba311c');
    sheet.getRange("T9").setValue(1);
  } else {
    subDragon();
    subAssassin();    
    sheet.getRange('E31').setBackground('#00ffff');
    sheet.getRange("T9").setValue(0);
  }
}

function windranger() {
  var temp = ss.getRange("T8").getValue()
  if(temp === 0) {
    addElf();
    addHunter(); 
    sheet.getRange('E26').setBackground('#ba311c');
    sheet.getRange("T8").setValue(1);
  } else {
    subElf();
    subHunter();    
    sheet.getRange('E26').setBackground('#00ffff');
    sheet.getRange("T8").setValue(0);
  }
}

////////////////////////////////////////////////////////4 COST UNITS//////////////////////////////////////////////////////////////////////////

function alchemist() {
  var temp = ss.getRange("P11").getValue()
  if(temp === 0) {
    addGoblin();
    addWarlock(); 
    sheet.getRange('H31').setBackground('#ba311c');
    sheet.getRange("P11").setValue(1);
  } else {
    subGoblin();
    subWarlock(); 
    sheet.getRange('H31').setBackground('#a261cf');
    sheet.getRange("P11").setValue(0);
  }
}

function disruptor() {
  var temp = ss.getRange("Q11").getValue()
  if(temp === 0) {
    addOrc();
    addShaman(); 
    sheet.getRange('I31').setBackground('#ba311c');
    sheet.getRange("Q11").setValue(1);
  } else {
    subOrc();
    subShaman(); 
    sheet.getRange('I31').setBackground('#a261cf');
    sheet.getRange("Q11").setValue(0);
  }
}

function doom() {
  var temp = ss.getRange("P10").getValue()
  if(temp === 0) {
    addDemon();
    addWarrior(); 
    sheet.getRange('H26').setBackground('#ba311c');
    sheet.getRange("P10").setValue(1);
  } else {
    subDemon();
    subWarrior(); 
    sheet.getRange('H26').setBackground('#a261cf');
    sheet.getRange("P10").setValue(0);
  }
}

function dragonKnight() {
  var temp = ss.getRange("S11").getValue()
  if(temp === 0) {
    addHuman();
    addDragon(); 
    addKnight();
    sheet.getRange('K31').setBackground('#ba311c');
    sheet.getRange("S11").setValue(1);
  } else {
    subHuman();
    subDragon(); 
    subKnight();
    sheet.getRange('K31').setBackground('#a261cf');
    sheet.getRange("S11").setValue(0);
  }
}

function keeperOfTheLight() {
  var temp = ss.getRange("S10").getValue()
  if(temp === 0) {
    addHuman();
    addMage(); 
    sheet.getRange('K26').setBackground('#ba311c');
    sheet.getRange("S10").setValue(1);
  } else {
    subHuman();
    subMage(); 
    sheet.getRange('K26').setBackground('#a261cf');
    sheet.getRange("S10").setValue(0);
  }
}

function kunkka() {
  var temp = ss.getRange("Q10").getValue()
  if(temp === 0) {
    addHuman();
    addWarrior(); 
    sheet.getRange('I26').setBackground('#ba311c');
    sheet.getRange("Q10").setValue(1);
  } else {
    subHuman();
    subWarrior(); 
    sheet.getRange('I26').setBackground('#a261cf');
    sheet.getRange("Q10").setValue(0);
  }
}

function loneDruid() {
  var temp = ss.getRange("T11").getValue()
  if(temp === 0) {
    addBeast();
    addDruid(); 
    sheet.getRange('L31').setBackground('#ba311c');
    sheet.getRange("T11").setValue(1);
  } else {
    subBeast();
    subDruid(); 
    sheet.getRange('L31').setBackground('#a261cf');
    sheet.getRange("T11").setValue(0);
  }
}

function medusa() {
  var temp = ss.getRange("R11").getValue()
  if(temp === 0) {
    addNaga();
    addHunter(); 
    sheet.getRange('J31').setBackground('#ba311c');
    sheet.getRange("R11").setValue(1);
  } else {
    subNaga();
    subHunter(); 
    sheet.getRange('J31').setBackground('#a261cf');
    sheet.getRange("R11").setValue(0);
  }
}

function necrophos() {
  var temp = ss.getRange("T10").getValue()
  if(temp === 0) {
    addUndead();
    addWarlock(); 
    sheet.getRange('L26').setBackground('#ba311c');
    sheet.getRange("T10").setValue(1);
  } else {
    subUndead();
    subWarlock(); 
    sheet.getRange('L26').setBackground('#a261cf');
    sheet.getRange("T10").setValue(0);
  }
}

function templarAssassin() {
  var temp = ss.getRange("U10").getValue()
  if(temp === 0) {
    addElf();
    addAssassin(); 
    sheet.getRange('M26').setBackground('#ba311c');
    sheet.getRange("U10").setValue(1);
  } else {
    subElf();
    subAssassin(); 
    sheet.getRange('M26').setBackground('#a261cf');
    sheet.getRange("U10").setValue(0);
  }
}

function trollWarlord() {
  var temp = ss.getRange("R10").getValue()
  if(temp === 0) {
    addTroll();
    addWarrior(); 
    sheet.getRange('J26').setBackground('#ba311c');
    sheet.getRange("R10").setValue(1);
  } else {
    subWarrior();
    subWarrior(); 
    sheet.getRange('J26').setBackground('#a261cf');
    sheet.getRange("R10").setValue(0);
  }
}

////////////////////////////////////////////////////////5 COST UNITS//////////////////////////////////////////////////////////////////////////

function enigma() {
  var temp = ss.getRange("S12").getValue()
  if(temp === 0) {
    addElemental();
    addWarlock(); 
    sheet.getRange('N31').setBackground('#ba311c');
    sheet.getRange("S12").setValue(1);
  } else {
    subElemental();
    subWarlock();    
    sheet.getRange('N31').setBackground('#fa912b');
    sheet.getRange("S12").setValue(0);
  }
}

function gyrocopter() {
  var temp = ss.getRange("P12").getValue()
  if(temp === 0) {
    addDwarf();
    addMech(); 
    sheet.getRange('N26').setBackground('#ba311c');
    sheet.getRange("P12").setValue(1);
  } else {
    subDwarf();
    subMech();    
    sheet.getRange('N26').setBackground('#fa912b');
    sheet.getRange("P12").setValue(0);
  }
}

function lich() {
  var temp = ss.getRange("T12").getValue()
  if(temp === 0) {
    addUndead();
    addMage(); 
    sheet.getRange('O31').setBackground('#ba311c');
    sheet.getRange("T12").setValue(1);
  } else {
    subUndead();
    subMage();    
    sheet.getRange('O31').setBackground('#fa912b');
    sheet.getRange("T12").setValue(0);
  }
}

function tidehunter() {
  var temp = ss.getRange("R12").getValue()
  if(temp === 0) {
    addNaga();
    addHunter(); 
    sheet.getRange('M31').setBackground('#ba311c');
    sheet.getRange("R12").setValue(1);
  } else {
    subNaga();
    subHunter();    
    sheet.getRange('O31').setBackground('#fa912b');
    sheet.getRange("R12").setValue(0);
  }
}

function techies() {
  var temp = ss.getRange("Q12").getValue()
  if(temp === 0) {
    addGoblin();
    addMech(); 
    sheet.getRange('O26').setBackground('#ba311c');
    sheet.getRange("Q12").setValue(1);
  } else {
    subGoblin();
    subMech();    
    sheet.getRange('O26').setBackground('#fa912b');
    sheet.getRange("Q12").setValue(0);
  }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                END OF ADD/SUB UNITS                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                              START OF ADD/SUB CLASSES                                                                    //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function addAssassin() {
    var temp = ss.getRange("F2").getValue() + 1;
    SpreadsheetApp.getActiveSheet().getRange("F2").setValue(temp);
  
    temp = spreadsheet.getRange('F2').getValue(); 
    for(i = 0; i < temp; i++) {
      sheet.getRange(2,i+8).setBackground('#00ffff');
    }
}
function subAssassin() {
    var temp = ss.getRange("F2").getValue() - 1;
    SpreadsheetApp.getActiveSheet().getRange("F2").setValue(temp);
    
    temp = spreadsheet.getRange('F2').getValue(); 
    sheet.getRange(2,temp+8).setBackground('#ffffff');
}

function addBeast() {
    var temp = ss.getRange("F3").getValue() + 1;
    SpreadsheetApp.getActiveSheet().getRange("F3").setValue(temp);
  
    temp = spreadsheet.getRange('F3').getValue(); 
    for(i = 0; i < temp; i++) {
      sheet.getRange(3,i+8).setBackground('#00ffff');
    }
}
function subBeast() {
    var temp = ss.getRange("F3").getValue() - 1;
    SpreadsheetApp.getActiveSheet().getRange("F3").setValue(temp);
  
    var temp = spreadsheet.getRange('F3').getValue(); 
    sheet.getRange(3,temp+8).setBackground('#ffffff');
}

function addDemon() {
    var temp = ss.getRange("F4").getValue() + 1;
    SpreadsheetApp.getActiveSheet().getRange("F4").setValue(temp);
  
    temp = spreadsheet.getRange('F4').getValue(); 
    for(i = 0; i < temp; i++) {
      sheet.getRange(4,i+8).setBackground('#00ffff');
    }
}
function subDemon() {
    var temp = ss.getRange("F4").getValue() - 1;
    SpreadsheetApp.getActiveSheet().getRange("F4").setValue(temp);
  
    temp = spreadsheet.getRange('F4').getValue(); 
    sheet.getRange(4,temp+8).setBackground('#ffffff');

}

function addDemonHunter() {
    var temp = ss.getRange("F5").getValue() + 1;
    SpreadsheetApp.getActiveSheet().getRange("F5").setValue(temp);
    
    temp = spreadsheet.getRange('F5').getValue(); 
    for(i = 0; i < temp; i++) {
      sheet.getRange(5,i+8).setBackground('#00ffff');
    }
}
function subDemonHunter() {
    var temp = ss.getRange("F5").getValue() - 1;
    SpreadsheetApp.getActiveSheet().getRange("F5").setValue(temp);
  
    temp = spreadsheet.getRange('F6').getValue(); 
    sheet.getRange(5,temp+8).setBackground('#ffffff');
}

function addDragon() {
    var temp = ss.getRange("F6").getValue() + 1;
    SpreadsheetApp.getActiveSheet().getRange("F6").setValue(temp);
  
    temp = spreadsheet.getRange('F6').getValue(); 
    for(i = 0; i < temp; i++) {
      sheet.getRange(6,i+8).setBackground('#00ffff');
    }
}
function subDragon() {
    var temp = ss.getRange("F6").getValue() - 1;
    SpreadsheetApp.getActiveSheet().getRange("F6").setValue(temp);
  
    temp = spreadsheet.getRange('F6').getValue(); 
    sheet.getRange(6,temp+8).setBackground('#ffffff');
}

function addDruid() {
    var temp = ss.getRange("F7").getValue() + 1;
    SpreadsheetApp.getActiveSheet().getRange("F7").setValue(temp);
  
    temp = spreadsheet.getRange('F7').getValue(); 
    for(i = 0; i < temp; i++) {
      sheet.getRange(7,i+8).setBackground('#00ffff');
    }  
}
function subDruid() {
    var temp = ss.getRange("F7").getValue() - 1;
    SpreadsheetApp.getActiveSheet().getRange("F7").setValue(temp);
  
    temp = spreadsheet.getRange('F7').getValue(); 
    sheet.getRange(7,temp+8).setBackground('#ffffff');
}

function addDwarf() {
    var temp = ss.getRange("F8").getValue() + 1;
    SpreadsheetApp.getActiveSheet().getRange("F8").setValue(temp);
  
    temp = spreadsheet.getRange('F8').getValue(); 
    for(i = 0; i < temp; i++) {
      sheet.getRange(8,i+8).setBackground('#00ffff');
    }
}
function subDwarf() {
    var temp = ss.getRange("F8").getValue() - 1;
    SpreadsheetApp.getActiveSheet().getRange("F8").setValue(temp);
  
    temp = spreadsheet.getRange('F8').getValue(); 
    sheet.getRange(8,temp+8).setBackground('#ffffff');
}

function addElemental() {
    var temp = ss.getRange("F9").getValue() + 1;
    SpreadsheetApp.getActiveSheet().getRange("F9").setValue(temp);
  
    temp = spreadsheet.getRange('F9').getValue(); 
      for(i = 0; i < temp; i++) {
    sheet.getRange(9,i+8).setBackground('#00ffff');
    }
}
function subElemental() {
    var temp = ss.getRange("F9").getValue() - 1;
    SpreadsheetApp.getActiveSheet().getRange("F9").setValue(temp);
  
    temp = spreadsheet.getRange('F9').getValue(); 
    sheet.getRange(9,temp+8).setBackground('#ffffff');
}

function addElf() {
    var temp = ss.getRange("F10").getValue() + 1;
    SpreadsheetApp.getActiveSheet().getRange("F10").setValue(temp);
  
    temp = spreadsheet.getRange('F10').getValue(); 
    for(i = 0; i < temp; i++) {
      sheet.getRange(10,i+8).setBackground('#00ffff');
    }
}
function subElf() {
    var temp = ss.getRange("F10").getValue() - 1;
    SpreadsheetApp.getActiveSheet().getRange("F10").setValue(temp);
  
    temp = spreadsheet.getRange('F10').getValue(); 
    sheet.getRange(10,temp+8).setBackground('#ffffff');
}

function addGoblin() {
    var temp = ss.getRange("F11").getValue() + 1;
    SpreadsheetApp.getActiveSheet().getRange("F11").setValue(temp);
  
    temp = spreadsheet.getRange('F11').getValue(); 
    for(i = 0; i < temp; i++) {
      sheet.getRange(11,i+8).setBackground('#00ffff');
    }
}
function subGoblin() {
    var temp = ss.getRange("F11").getValue() - 1;
    SpreadsheetApp.getActiveSheet().getRange("F11").setValue(temp);
  
    temp = spreadsheet.getRange('F11').getValue(); 
    sheet.getRange(11,temp+8).setBackground('#ffffff');
}

function addHuman() {
    var temp = ss.getRange("F12").getValue() + 1;
    SpreadsheetApp.getActiveSheet().getRange("F12").setValue(temp);
  
    temp = spreadsheet.getRange('F12').getValue(); 
    for(i = 0; i < temp; i++) {
      sheet.getRange(12,i+8).setBackground('#00ffff');
    }
}
function subHuman() {
    var temp = ss.getRange("F12").getValue() - 1;
    SpreadsheetApp.getActiveSheet().getRange("F12").setValue(temp);
  
    temp = spreadsheet.getRange('F12').getValue(); 
    sheet.getRange(12,temp+8).setBackground('#ffffff');
}

function addHunter() {
    var temp = ss.getRange("F13").getValue() + 1;
    SpreadsheetApp.getActiveSheet().getRange("F13").setValue(temp);
  
    var temp = spreadsheet.getRange('F13').getValue(); 
    for(i = 0; i < temp; i++) {
    sheet.getRange(13,i+8).setBackground('#00ffff');
    }
}
function subHunter() {
    var temp = ss.getRange("F13").getValue() - 1;
    SpreadsheetApp.getActiveSheet().getRange("F13").setValue(temp);
    
    temp = spreadsheet.getRange('F13').getValue(); 
    sheet.getRange(13,temp+8).setBackground('#ffffff');
}

function addKnight() {
    var temp = ss.getRange("F14").getValue() + 1;
    SpreadsheetApp.getActiveSheet().getRange("F14").setValue(temp);
  
    temp = spreadsheet.getRange('F14').getValue(); 
    for(i = 0; i < temp; i++) {
      sheet.getRange(14,i+8).setBackground('#00ffff');
    }
}
function subKnight() {
    var temp = ss.getRange("F14").getValue() - 1;
    SpreadsheetApp.getActiveSheet().getRange("F14").setValue(temp);
  
    temp = spreadsheet.getRange('F14').getValue(); 
    sheet.getRange(14,temp+8).setBackground('#ffffff');
}

function addMage() {
    var temp = ss.getRange("F15").getValue() + 1;
    SpreadsheetApp.getActiveSheet().getRange("F15").setValue(temp);

    temp = spreadsheet.getRange('F15').getValue(); 
    for(i = 0; i < temp; i++) {
      sheet.getRange(15,i+8).setBackground('#00ffff');
    }
}
function subMage() {
    var temp = ss.getRange("F15").getValue() - 1;
    SpreadsheetApp.getActiveSheet().getRange("F15").setValue(temp);
  
    temp = spreadsheet.getRange('F15').getValue(); 
    sheet.getRange(15,temp+8).setBackground('#ffffff'); 
}

function addMech() {
    var temp = ss.getRange("F16").getValue() + 1;
    SpreadsheetApp.getActiveSheet().getRange("F16").setValue(temp);

    temp = spreadsheet.getRange('F16').getValue(); 
    for(i = 0; i < temp; i++) {
      sheet.getRange(16,i+8).setBackground('#00ffff');
    }
}
function subMech() {
    var temp = ss.getRange("F16").getValue() - 1;
    SpreadsheetApp.getActiveSheet().getRange("F16").setValue(temp);
  
    temp = spreadsheet.getRange('F16').getValue(); 
    sheet.getRange(16,temp+8).setBackground('#ffffff'); 
}

function addNaga() {
    var temp = ss.getRange("F17").getValue() + 1;
    SpreadsheetApp.getActiveSheet().getRange("F17").setValue(temp);

    temp = spreadsheet.getRange('F17').getValue(); 
    for(i = 0; i < temp; i++) {
      sheet.getRange(17,i+8).setBackground('#00ffff');
    }
}
function subNaga() {
    var temp = ss.getRange("F17").getValue() - 1;
    SpreadsheetApp.getActiveSheet().getRange("F17").setValue(temp);
  
    temp = spreadsheet.getRange('F17').getValue(); 
    sheet.getRange(17,temp+8).setBackground('#ffffff'); 
}

function addOgre() {
    var temp = ss.getRange("F18").getValue() + 1;
    SpreadsheetApp.getActiveSheet().getRange("F18").setValue(temp);
  
    temp = spreadsheet.getRange('F18').getValue(); 
    for(i = 0; i < temp; i++) {
      sheet.getRange(18,i+8).setBackground('#00ffff');
    }
}
function subOgre() {
    var temp = ss.getRange("F18").getValue() - 1;
    SpreadsheetApp.getActiveSheet().getRange("F18").setValue(temp);
  
    temp = spreadsheet.getRange('F18').getValue(); 
    sheet.getRange(18,temp+8).setBackground('#ffffff');
}

function addOrc() {
    var temp = ss.getRange("F19").getValue() + 1;
    SpreadsheetApp.getActiveSheet().getRange("F19").setValue(temp);

    temp = spreadsheet.getRange('F19').getValue(); 
    for(i = 0; i < temp; i++) {
      sheet.getRange(19,i+8).setBackground('#00ffff');
    }
}
function subOrc() {
    var temp = ss.getRange("F19").getValue() - 1;
    SpreadsheetApp.getActiveSheet().getRange("F19").setValue(temp);
  
    temp = spreadsheet.getRange('F19').getValue(); 
    sheet.getRange(19,temp+8).setBackground('#ffffff');
}

function addShaman() {
    var temp = ss.getRange("F20").getValue() + 1;
    SpreadsheetApp.getActiveSheet().getRange("F20").setValue(temp);
  
    temp = spreadsheet.getRange('F20').getValue(); 
    for(i = 0; i < temp; i++) {
      sheet.getRange(20,i+8).setBackground('#00ffff');
    }
}
function subShaman() {
    var temp = ss.getRange("F20").getValue() - 1;
    SpreadsheetApp.getActiveSheet().getRange("F20").setValue(temp);
  
    temp = spreadsheet.getRange('F20').getValue(); 
    sheet.getRange(20,temp+8).setBackground('#ffffff');
}

function addTroll() {
    var temp = ss.getRange("F21").getValue() + 1;
    SpreadsheetApp.getActiveSheet().getRange("F21").setValue(temp);
  
    temp = spreadsheet.getRange('F21').getValue(); 
    for(i = 0; i < temp; i++) {
      sheet.getRange(21,i+8).setBackground('#00ffff');
    }
}
function subTroll() {
    var temp = ss.getRange("F21").getValue() - 1;
    SpreadsheetApp.getActiveSheet().getRange("F21").setValue(temp);
  
    temp = spreadsheet.getRange('F21').getValue(); 
    sheet.getRange(21,temp+8).setBackground('#ffffff');
}

function addUndead() {
    var temp = ss.getRange("F22").getValue() + 1;
    SpreadsheetApp.getActiveSheet().getRange("F22").setValue(temp);

    temp = spreadsheet.getRange('F22').getValue(); 
    for(i = 0; i < temp; i++) {
      sheet.getRange(22,i+8).setBackground('#00ffff');
    }
}
function subUndead() {
    var temp = ss.getRange("F22").getValue() - 1;
    SpreadsheetApp.getActiveSheet().getRange("F22").setValue(temp);
  
    temp = spreadsheet.getRange('F22').getValue(); 
    sheet.getRange(22,temp+8).setBackground('#ffffff');
}

function addWarlock() {
    var temp = ss.getRange("F23").getValue() + 1;
    SpreadsheetApp.getActiveSheet().getRange("F23").setValue(temp);
    
    temp = spreadsheet.getRange('F23').getValue(); 
    for(i = 0; i < temp; i++) {
      sheet.getRange(23,i+8).setBackground('#00ffff');
    }
}
function subWarlock() {
    var temp = ss.getRange("F23").getValue() - 1;
    SpreadsheetApp.getActiveSheet().getRange("F23").setValue(temp);
  
    temp = spreadsheet.getRange('F23').getValue(); 
    sheet.getRange(23,temp+8).setBackground('#ffffff');
}

function addWarrior() {
    var temp = ss.getRange("F24").getValue() + 1;
    SpreadsheetApp.getActiveSheet().getRange("F24").setValue(temp);
  
    temp = spreadsheet.getRange('F24').getValue(); 
    for(i = 0; i < temp; i++) {
      sheet.getRange(24,i+8).setBackground('#00ffff');
    }
}
function subWarrior() {
    var temp = ss.getRange("F24").getValue() - 1;
    SpreadsheetApp.getActiveSheet().getRange("F24").setValue(temp);
  
    temp = spreadsheet.getRange('F24').getValue(); 
    sheet.getRange(24,temp+8).setBackground('#ffffff');
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                               END OF ADD/SUB CLASSES                                                                     //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
