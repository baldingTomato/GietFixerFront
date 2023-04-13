export class EnumHelper {
    static GetAllEnumValues(enumType: any): string[] {
        return Object.keys(enumType).filter((item) => {
            return isNaN(Number(item));
        })
    }
}