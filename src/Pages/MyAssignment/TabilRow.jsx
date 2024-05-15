

const TabilRow = ({submit}) => {
    const {assignmentTitle,marks} = submit;

    return (
        <div className="ml-20 w-1/2 shadow-md shadow-slate-700 border-2">
            <tr>
        
        <td  className="mt-4">{assignmentTitle}</td>
        <td className="mt-4">{marks}</td>
        
      </tr>
        </div>
    );
};

export default TabilRow;