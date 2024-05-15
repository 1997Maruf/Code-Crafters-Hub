

const TabilRow = ({submit}) => {
    const {assignmentTitle,marks} = submit;

    return (
        <div className="ml-20">
            <tr>
        
        <td>{assignmentTitle}</td>
        <td>{marks}</td>
        
      </tr>
        </div>
    );
};

export default TabilRow;