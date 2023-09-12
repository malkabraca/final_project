const TableUsers =({
  name,
  phone,
  email,
  city,
  street,
  houseNumber,
  createdAt,
 }) => {
 
     return (
         <tr>
           <td>{name}</td>
           <td>{phone}</td>
           <td> {email}</td>
           <td className="medieCrm">{city}</td>
           <td className="medieCrm">{street}</td>
           <td className="medieCrm">{houseNumber}</td>
           <td className="medieCrm">{createdAt}</td>
         </tr>
       );
     };
export default TableUsers;
