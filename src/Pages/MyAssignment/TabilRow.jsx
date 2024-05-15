

const TabilRow = ({submit}) => {
    const {assignmentTitle,marks} = submit;

    return (
        <div className="ml-20 w-1/2 border-2">
            <tr>
        
        <td >{assignmentTitle}</td>
        <td>{marks}</td>
        
      </tr>
        </div>
    );
};

export default TabilRow;