AFRAME.registerComponent("poster", {
    init: function () {
      this.placesContainer = this.el;
      this.createCards()
      
    },
  
    createCards: function () {
      const thumbNailsRef = [
        {
          id: "superman",
          title: "Superman",
          url: "assets/superman.jpg"
        },
        {
          id: "Spider Man",
          title: "Spider Man",
          url: "assets/spiderman.webp",
        },
  
        {
          id: "captionaero",
          title: "Caption Aero",
          url: "assets/captianaero.jpg",
        },
        {
          id: "outerspace",
          title: "Outer Space",
          url: "assets/outerspace.jpg",
        },
      ];
      let prevoiusXPosition = -60;
      
  
      for (var item of thumbNailsRef) {
        const posX = prevoiusXPosition + 25;
        const posY = 10;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        prevoiusXPosition = posX;
        const borderEl = this.createBorder(position , item.id)
        const ThumbnailEl = this.createThumbnail(item)
        borderEl.appendChild(ThumbnailEl)
        const titleel = this.createTitleEl( position , item)
        borderEl.appendChild(titleel)
        this.placesContainer.appendChild(borderEl);
      }
    },
        // Border Element
  
      createBorder: function(position , id){
        const entityel = document.createElement("a-entity")
        entityel.setAttribute("id" , id)
        entityel.setAttribute("visible" , true)
        entityel.setAttribute("geometry" , {
          primitive:"plane" , width: 20 , height: 28
        })
        entityel.setAttribute("position" ,  position)
        entityel.setAttribute("material" , {
          color : "00BCD4" , opacity: 0.1
        })
        return entityel 
      } , 
  
  
        // Thumbnail Element
       
        createThumbnail: function(item){
          const entityel = document.createElement("a-entity")
          entityel.setAttribute("visible" , true)
          entityel.setAttribute("geometry" , {
            primitive:"plane" , width: 20 , height: 28 
          })
          entityel.setAttribute("material" , {
            src:item.url 
          })
          return entityel
        },
  
        // Title Text Element
        createTitleEl: function(position , item){
          const entityel = document.createElement("a-entity")
          entityel.setAttribute("text" , {
            font:"exo2bold" , align:"center" , width:60 , 
            color:"#65100" , value:item.title 
          })
          const elposition = position
          elposition.y = -30 
          entityel.setAttribute("position" ,  elposition)
          entityel.setAttribute("visible" ,  true)
          return entityel
        }
       
    
  });
  