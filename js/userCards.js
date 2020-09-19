export class UserCard{
    constructor(userName, userSurname, userAvatar, userPosition) {
        this.name = userName;
        this.surname = userSurname;
        this.avatar = userAvatar;
        this.position = userPosition;
    }
    render(){
        const card = document.createElement("div");
        card.className = "cardContainer";
        card.appendChild(this.renderTopFigure());
        card.appendChild(this.renderCardHeader());
        card.appendChild(this.renderCardBody());
        return card;
    }

    renderTopFigure(){
        const topFigure = document.createElement("div");
        topFigure.className = "topFigure";
        return topFigure;
    }

    renderCardHeader(){
        const cardHeader = document.createElement("div");
        cardHeader.className = "cardHeader";

        const userAvatar = document.createElement("img");
        userAvatar.className = "userAvatar";
        userAvatar.src = this.avatar;

        const headerStripe = document.createElement("div");
        headerStripe.className = "headerStripe";
        headerStripe.innerText = "Arch Owl";

        cardHeader.appendChild(userAvatar);
        cardHeader.appendChild(headerStripe);

        return cardHeader;
    }

    renderCardBody(){
        const cardBody = document.createElement("div");
        cardBody.className = "cardBody";

        const userFullName = document.createElement("h3");
        userFullName.className = "userFullName";
        userFullName.innerText = `${this.name} ${this.surname}`;

        const userPosition = document.createElement("div");
        userPosition.className = "userPosition";
        userPosition.innerText = this.position;

        cardBody.appendChild(userFullName);
        cardBody.appendChild( userPosition);
        
        return cardBody;
    }
}