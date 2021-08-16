function flatten(elements) {
          let ash = [] ;
        for(var i=0;i<elements.length;i++)
        {
                  if(elements[i].length!==1)
                  ash=ash.concat(flatten(elements))
                  else
                  ash.push(elements[i])
        }
               return ash;
}
export{flatten};