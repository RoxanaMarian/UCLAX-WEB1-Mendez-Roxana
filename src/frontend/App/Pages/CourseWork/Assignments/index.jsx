// components
import AssignmentTemplate from "./AssignmentTemplate";

// markdown
import assign1 from "./markdown/assign1.md?raw";
import assign2 from "./markdown/assign2.md?raw";
import assign3 from "./markdown/assign3.md?raw";
import assign4 from "./markdown/assign4.md?raw";
import assign5 from "./markdown/assign5.md?raw";
import assign6 from "./markdown/assign6.md?raw";
import assign7 from "./markdown/assign7.md?raw";

// component
const Assignments = () => {
    return (
        <div>
            <h2>Assignments</h2>
            <AssignmentTemplate markdown={assign1} />
            <AssignmentTemplate markdown={assign2} />
            <AssignmentTemplate markdown={assign3} />
            <AssignmentTemplate markdown={assign4} />
            <AssignmentTemplate markdown={assign5} />
            <AssignmentTemplate markdown={assign6} />
            <AssignmentTemplate markdown={assign7} />
        </div>
    );
};

export default Assignments;
