using VisionBox.Models;
using VisionBox.Models.Enums;

namespace VisionBox.Controllers.Extensions;

public static class MedalistPostExtensions
{
    public static IEnumerable<Medalist> ChangeMaleMedalistName(this List<Medalist> maleMedalists, int medalistId, string newName)
    {
        foreach (var medalist in maleMedalists)
        {
            if (medalist.MedalistId == medalistId)
            {
                medalist.Name = newName;
            }

            yield return medalist;
        }
    }
}