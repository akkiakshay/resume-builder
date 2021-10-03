import React, { useState} from "react";
import { WithContext as ReactTags } from "react-tag-input";
import { skills } from ".";
import { useDispatch,useSelector } from "react-redux";
import { submit } from "../../app/redux/skillsSlice";
import { Button } from "react-bootstrap";
const KeyCodes = {
  comma: 188,
  enter: [10, 13],
};

const delimiters = [...KeyCodes.enter, KeyCodes.comma];

export const Skills = () => {
    const { skillsList } = useSelector((state) => state.skills);
  const dispatch = useDispatch();
  const [tags, setTags] = useState(skillsList);
  const [suggestions] = useState(skills);

  const handleDelete = (i) => {
    setTags(tags.filter((tag, index) => index !== i));
  };

  const handleAddition = (tag) => {
    setTags([...tags, tag]);
  };

  const onSave = () => {
    dispatch(submit({ skillsList: tags }));
  };

  return (
    <div>
      <div>Add Skills</div>
      <ReactTags
        tags={tags}
        suggestions={suggestions}
        handleDelete={handleDelete}
        handleAddition={handleAddition}
        handleDrag={() => {}}
        delimiters={delimiters}
      />

      <Button variant="primary" className="mt-3" onClick={onSave}>
        Save
      </Button>
    </div>
  );
};
