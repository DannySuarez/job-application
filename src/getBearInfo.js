function getBearInfo(formData) {
    //Make object literal, literally making an object
    const details = {
        name: formData.get('full-name'),
        age: formData.get('age'),
        accessories: formData.getAll('accessories'),
        mood: formData.get('mood'),
        color: formData.get('color'),
        background: formData.get('background'),
    };
    return details;
}
export default getBearInfo;