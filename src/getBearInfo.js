function getBearInfo(formData) {
    const age = parseInt(formData.get('age'));

    //Make object literal, literally making an object
    const details = {
        name: formData.get('full-name'),
        age: age,
        accessories: formData.getAll('accessories'),
        mood: formData.get('mood'),
        color: formData.get('color'),
        background: formData.get('background'),
    };
    return details;
}
export default getBearInfo;