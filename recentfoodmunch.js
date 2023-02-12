let wcuCard = document.getElementById('wcu-card1');
let wcuCardTitle = document.getElementById('wcu-card-heading1');
let wcuCardDescription = document.getElementById('wcu-card-description1');


wcuCard.onmouseover = () => {
    wcuCardTitle.style.fontWeight = 'bold';
    wcuCardTitle.style.color = 'grey';
    wcuCardDescription.style.fontWeight = '700';
    wcuCardDescription.style.color = 'yellowgreen';
    wcuCard.style.backgroundColor = '';
};

wcuCard.onmouseout = () => {
    wcuCardTitle.style.fontWeight = '400';

    wcuCardTitle.style.color = 'black';
    wcuCardDescription.style.fontWeight = '400';
    wcuCardDescription.style.color = 'grey';
};