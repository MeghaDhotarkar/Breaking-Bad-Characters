import React from 'react'

const CharacterList = ({items,isLoading}) => {
    return (
        isLoading?<h1>Lading..</h1>:<section className='list-group mb-4'>
            <table> 
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>DateOfBirth</th>
                        <th>Status</th>
                        <th>Occupation</th>
                        
                    </tr>
                </thead>
                <tbody>
                 {items.map(item => {
                   
                     return (
                      
                       <tr>
                       
                           <td >{item.char_id} </td>
                           <td>{item.name}</td>
                           <td>{item.birthday}</td>
                           <td>{item.status}</td>
                           <td>{item.occupation}<button onClick={()=> 
                                window.open().document.write('<div className="container">'+item.name+"<br />"+
                                         '<img src='+item.img+'><br />'+
                                         item.birthday+"<br />"+
                                         item.nickname+"<br />"+
                                         item.occupation+"<br />"+
                                         item.portrayed+"<br />"+
                                            item.status+'</div>')}>Detail</button></td>
                           
                       </tr>
                                            
                     );
                 })}
                </tbody>
            </table>
            
        </section>
    )
}

export default CharacterList
