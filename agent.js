class agent{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    //movement of the agent
    move(mv_dir){
        switch(mv_dir){
            case "UP":
                //upward
                this.y += 1;
                break;
            case "DN":
                //downward
                this.y -= 1;
                break;
            case "LT":
                //left
                this.x -= 1;
                break;
            case "RT":
                //right
                this.x += 1
                break;
            case "UR":
                //upward and right
                this.x += 1;
                this.y += 1;
                break;
            case "UL":
                //upward and left
                this.x -= 1;
                this.y += 1;
                break;
            case "DR":
                //downward and right
                this.x += 1;
                this.y -= 1;
                break;
            case "DL":
                //downward and left
                this.x -= 1;
                this.y -= 1;
                break;
        }
    }
    //agent attack
    atk(target){
    }
    //show the agent
    show_agent(){
    }
}