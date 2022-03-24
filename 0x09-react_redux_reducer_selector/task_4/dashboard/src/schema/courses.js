import { normalize, schema } from 'normalizr';

const courses = new schema.Entity("courses");
const coursesListSchema = [courses];

const coursesNormalizer = (data) => {
    let normalizedData = normalize(data, coursesListSchema);
    return normalizedData;
}

module.exports ={
    coursesListSchema,
    coursesNormalizer,
}
