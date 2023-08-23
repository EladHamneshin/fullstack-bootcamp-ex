
// בנו תכנית שמדמה את המשחק אבן נייר ומספריים
// התכנית תגדיר מי המנצח לפי חוקיות המשחק
// אבן מנצח מספריים שמנצחות נייר שמנצח אבן

// דגשים
// שחקן  יכול לבחור בין אבן נייר ומספרים בלבד! אך שחקן יכול שלא תהיה לו בחירה
// התכנית יכולה להחזיר את המחרוזות
// 'tie', 'player1', 'player2' 
// התשובה חייבת להכיל
// ENUM
// type/interface
// union
// במידה ולשחקן אין בחירה הצג זרקו שגיאה
// ממשו את הפונקציה הוסיפו טיפוסים לפרמטרים ולערך החזרה של הפונקציה

enum Game {
    Rock,
    Paper,
    Scissors
}

type Player = {
    name: string;
    choice: Game;
}


function playGame(player1:Player, player2:Player): "player1" | "player2" | "tie" {
    if (player1.choice === player2.choice) {
        return 'tie';
    }
    if (player1.choice === Game.Rock && player2.choice === Game.Scissors) {
        return 'player1';
    }
    if (player1.choice === Game.Paper && player2.choice === Game.Rock) {
        return 'player1';
    }
    if (player1.choice === Game.Scissors && player2.choice === Game.Paper) {
        return 'player1';
    }
    return 'player2';

}


const player1:Player = {
    name: 'player1',
    choice: Game.Paper
}

const player2:Player = {
    name: 'player2',
    choice: Game.Scissors
}

const play = playGame(player1, player2);
console.log(play);

