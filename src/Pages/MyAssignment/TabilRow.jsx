

const TabilRow = ({submit}) => {
    const {assignmentTitle,marks} = submit;

    return (
        <div className="ml-20">
            <tr>
        
        <td className="border-2">{assignmentTitle}</td>
        <td>{marks}</td>
        
      </tr>
        </div>
    );
};

export default TabilRow;