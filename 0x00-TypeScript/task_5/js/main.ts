interface MajorCredits {
    credits: number;
    brand: "brandMajor";
}

interface MinorCredits {
    credits: number;
    brand: "brandMinor";    
}

function sumMajorCredits(subject1: number, subject2: number): number {
    return subject1 + subject2;
}

function sumMinorCredits(subject1: number, subject2: number): number {
    return subject1 + subject2;
}
