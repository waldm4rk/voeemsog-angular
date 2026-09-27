begin;

-- Seed rows extracted from the supplied PostgreSQL dump. Parents precede dependent rows.
-- archive_category: 0 rows
-- article: 0 rows
-- posts: 1 rows
insert into public.posts (id, title, text, post_date, tags) values ('f90b8cfc-cb06-4e18-87e2-7b843b880779', 'Тестовый пост', 'Этот пост - тест поста без картинки. Тут мне нужно набрать как можно больше бесполезного текста чтобы заполнить пару строк, поэтому я продолжу писать буквы, которые не имеют смысла. Суть в том, что несмотря на то, эти предложения в целом звучат правильно построенными, на деле смысла в них вы не найдёте от слова совсем, и чтение данного текста - это пустая трата времени, не приносящая вам абсолютно никакой новой информации, ведь по сути это текст о тексте.', '2025-11-30', '{}') on conflict do nothing;
-- rooms: 20 rows
insert into public.rooms (id, code, floor, danger_type, size, color, light_level, date) values ('2817827e-d202-4a7e-bba6-2abc991029bc', 'FD-230', '1', '0', '1x1', 'GREEN', '0', '2025-10-20') on conflict do nothing;
insert into public.rooms (id, code, floor, danger_type, size, color, light_level, date) values ('a66aa291-34f8-47d5-b885-5aa280f2c182', 'MI-008', '1', '0', '2x2', 'CYAN', '0', '2025-11-14') on conflict do nothing;
insert into public.rooms (id, code, floor, danger_type, size, color, light_level, date) values ('7ba6a2c2-7b2d-401c-a68a-256e32504001', 'DL-238', '1', '0', '1x1', 'RED', '2', '2025-11-16') on conflict do nothing;
insert into public.rooms (id, code, floor, danger_type, size, color, light_level, date) values ('6a7e7d33-4a3c-47b8-8a3f-f698f135184c', 'II-533', '1', '0', '2x1', 'RED', '2', '2025-11-16') on conflict do nothing;
insert into public.rooms (id, code, floor, danger_type, size, color, light_level, date) values ('76734021-76a8-4175-91f7-9d952f774ebc', 'NW-504', '1', '0', '1x1', 'PURPLE', '0', '2025-11-16') on conflict do nothing;
insert into public.rooms (id, code, floor, danger_type, size, color, light_level, date) values ('749f3caa-d39f-411b-b67e-71c3559d1eb8', 'LQ-474', '1', '0', '1x1', 'YELLOW', '4', '2025-11-16') on conflict do nothing;
insert into public.rooms (id, code, floor, danger_type, size, color, light_level, date) values ('bab87c18-6468-4779-b815-67348e9053a9', 'EZ-314', '1', '1', '1x1', 'PURPLE', '2', '2025-11-20') on conflict do nothing;
insert into public.rooms (id, code, floor, danger_type, size, color, light_level, date) values ('96108535-61ac-4c20-b7e5-47e540144d5a', 'GG-217', '1', '1', '2x2', 'PURPLE', '0', '2025-11-16') on conflict do nothing;
insert into public.rooms (id, code, floor, danger_type, size, color, light_level, date) values ('161cfb09-a5d8-416f-94f1-f51bf128e03b', 'BP-429', '1', '0', '3x1', 'YELLOW', '0', '2025-11-17') on conflict do nothing;
insert into public.rooms (id, code, floor, danger_type, size, color, light_level, date) values ('5d09d9c9-ba45-44ea-a3b9-7a8be0c83484', 'AK-610', '1', '2', '3x4', 'CYAN', '1', '2025-10-20') on conflict do nothing;
insert into public.rooms (id, code, floor, danger_type, size, color, light_level, date) values ('9f561fd8-bf28-4bd5-a55c-1d5acb054aed', 'NX-508', '1', '0', '1x1', 'GREEN', '2', '2025-11-16') on conflict do nothing;
insert into public.rooms (id, code, floor, danger_type, size, color, light_level, date) values ('f5574f7c-8661-4981-a34c-059fc2c56a6c', 'BU-614', '1', '2', '3x1', 'BLUE', '1', '2025-10-20') on conflict do nothing;
insert into public.rooms (id, code, floor, danger_type, size, color, light_level, date) values ('b534ea05-0b13-4237-a3e5-c068a88a2da4', 'IE-525', '1', '1', '1x1', 'CYAN', '0', '2025-11-16') on conflict do nothing;
insert into public.rooms (id, code, floor, danger_type, size, color, light_level, date) values ('dea77c22-d56c-49d5-a138-06bf0eafb572', 'FF-307', '1', '1', '1x1', 'CYAN', '0', '2025-11-16') on conflict do nothing;
insert into public.rooms (id, code, floor, danger_type, size, color, light_level, date) values ('1b08edb9-b476-458c-9662-291c5d48397b', 'EZ-315', '1', '0', '2x1', 'YELLOW', '1', '2025-11-16') on conflict do nothing;
insert into public.rooms (id, code, floor, danger_type, size, color, light_level, date) values ('36727e43-c677-4c26-9031-cb0196e940b2', 'FA-311', '1', '0', '1x1', 'YELLOW', '0', '2025-11-16') on conflict do nothing;
insert into public.rooms (id, code, floor, danger_type, size, color, light_level, date) values ('bf1769cf-91d4-4128-918f-cfbc102e0c67', 'GT-114', '1', '1', '4x1', 'PURPLE', '2', '2025-11-16') on conflict do nothing;
insert into public.rooms (id, code, floor, danger_type, size, color, light_level, date) values ('c7ebc1db-57ed-4281-ba74-a27b3bd95200', 'JG-359', '1', '1', '1x1', 'BLUE', '1', '2025-11-16') on conflict do nothing;
insert into public.rooms (id, code, floor, danger_type, size, color, light_level, date) values ('7b6485bd-7fa1-46cc-88d4-9370433d75c9', 'JI-229', '1', '0', '1x1', 'BLUE', '2', '2025-11-16') on conflict do nothing;
insert into public.rooms (id, code, floor, danger_type, size, color, light_level, date) values ('ee9fe4c2-548c-4a9b-93f8-20629ddfaa84', 'FA-312', '1', '1', '4x4', 'GREEN', '0', '2025-11-16') on conflict do nothing;
-- room_translations: 38 rows
insert into public.room_translations (id, lang, name, description, room_id) values ('a54b1da6-2864-4e4d-a29d-95819d9df2da', 'ru_RU', 'Кинозал', 'FD-230-1 представляет собой комнату жилого типа, лишённую признаков износа или следов пребывания предыдущих субъектов. В центре помещения установлен массивный деревянный стол, за которым размещена электрическая розетка, к ней подключён телевизор. Напротив стола стоит мягкий кожаный диван тёмного цвета; на нём изначально обнаруживается пульт дистанционного управления.
$IMG(INFO)
$AUTHOR(joseph)
$REVERSE
$NEW
*Аномальные объекты и их свойства:*  
Пульт является единственным предметом в помещении, доступным для свободного перемещения. Все его кнопки выполнены из прозрачного материала и подсвечиваются случайными цветами, формируя уникальные комбинации. При нажатии на любую кнопку подсветка мгновенно гаснет, а через ~1,5 секунды загорается вновь, меняя порядок и оттенки свечения. В этот же момент телевизор активируется, транслируя уникальный сюжет.
$NEW
Каждый показанный сюжет соответствует глубинным, подсознательным желаниям субъекта, причём зафиксировано, что **ни один эпизод никогда не повторялся** при повторных активациях пульта. Содержание трансляций варьируется от бытовых и безобидных до крайне личных и тревожных, что позволяет предположить, что телевизор напрямую взаимодействует с психикой наблюдателя.
$NEW
*Механика безопасности:*  
Попытка вынести пульт за пределы FD-230-1 немедленно активирует защитный механизм: двери помещения захлопываются с силой, прямо пропорциональной расстоянию устройства от центра комнаты. При этом дальнейшие попытки покинуть зал оказываются невозможными до возвращения пульта в пределы центральной зоны.
<br/><br/><hr/><br/>
**Примечания:**<br/>
    
- Зафиксированы случаи, когда субъекты, после просмотра нескольких последовательных трансляций, испытывали сильное эмоциональное потрясение, включая плач, агрессию или ступор.<br/>
    
- Неизвестно, существует ли предел возможного количества уникальных сюжетов.<br/>', '2817827e-d202-4a7e-bba6-2abc991029bc') on conflict do nothing;
insert into public.room_translations (id, lang, name, description, room_id) values ('6d72ce67-efec-4f16-8375-0a5d81b92473', 'en_US', 'TV Room', 'FD-230-1 resembles a residential chamber, devoid of any signs of wear or evidence of previous occupants. At its center stands a massive wooden table, upon which an electrical outlet is installed with a television connected. Opposite the table rests a dark-colored leather sofa, on which a remote control is initially discovered.
$IMG(INFO)
$AUTHOR(joseph)
$REVERSE
$NEW
*Anomalous Objects and Properties:*  
The remote control is the only freely movable object within the chamber. Its buttons are made of transparent material and glow in random colors, forming unique combinations. When any button is pressed, the illumination instantly extinguishes and reappears approximately 1.5 seconds later, altering both sequence and hue. Simultaneously, the television activates, displaying a unique broadcast.
$NEW
Each broadcast directly corresponds to the subject’s **deep, subconscious desires**. It has been documented that no episode has ever repeated, even with repeated use of the remote. The content ranges from mundane and harmless to profoundly personal, distressing, or in rare cases deeply unsettling, suggesting direct interaction between the device and the observer’s psyche.
$NEW
*Safety Mechanism:*  
Any attempt to remove the remote from FD-230-1 immediately activates a defensive mechanism: the doors of the chamber slam shut with force proportional to the distance of the device from the central table. Until the remote is returned to the designated area, exiting the chamber remains impossible.
<br/><br/><hr/><br/>
**Notes:**<br/>
    
- ЗSubjects exposed to multiple consecutive broadcasts often display severe emotional disturbances, including crying, hysterical laughter, aggression, or catatonic stupor.<br/>
    
- The existence of a limit to the number of possible unique broadcasts remains unknown.<br/>', '2817827e-d202-4a7e-bba6-2abc991029bc') on conflict do nothing;
insert into public.room_translations (id, lang, name, description, room_id) values ('2417dca6-8064-4497-94f2-d70908e77e06', 'ru_RU', 'Супермаркет', 'MI-008-1 располагает в себе три стеллажа. Каждый стеллаж состоит из трех полок с разными продуктами, в основном съедобными.
$REVERSE
$IMG(INFO)
$AUTHOR(ivan)
$NEW
В комнате находятся две тележки на колесах и одна металлическая корзинка. Продукты и корзинку можно выносить из помещения, а тележки не помещаются в дверной проем.
$NEW
В потолке над западной дверью расположен вентиляционный люк<sup>1</sup>.
$NEW
Каждый товар обозначен ценником. Цены варьируются от 0.99$ (палка колбасы) до 12 888$ (большой фонарь<sup>2</sup>).
$NEW
Субъекты в коридоре испытывают легкие головные боли, но боль не вынуждает субъектов покидать коридор. 
$NEW
Помещение официально признано *организацией SIT* одним из безопасных для новоприбывших, на обеих дверях изнутри висят особые плакаты, не рекомендующие покидать помещение новоприбывшим субъектам.
<br/><br/><hr/><br/>
<sup>1</sup> Вентиляционный люк помечен как особо опасная территория, выходящая за рамки ответственности SIT.<br/>
<sup>2</sup> Большой фонарь был изъят организацией SIT и является ее собственностью.', 'a66aa291-34f8-47d5-b885-5aa280f2c182') on conflict do nothing;
insert into public.room_translations (id, lang, name, description, room_id) values ('9ee47b08-247a-41ae-b6fc-261dae9703f8', 'en_US', 'Supermarket', 'MI-008-1 has three racks. Each rack consists of three shelves with different products, mainly edible.
$REVERSE
$IMG(INFO)
$AUTHOR(ivan)
$NEW
There are two wheeled carts and one metal basket in the room. The products and basket can be taken out of the room, but the carts do not fit through the doorway.
$NEW
There is a ventilation hatch<sup>1</sup> in the ceiling above the west door.
$NEW
Each item has a price tag. Prices range from $0.99 (a sausage) to $12,888 (a large lantern <sup>2</sup>).
$NEW
Subjects in the corridor experience mild headaches, but the pain does not force them to leave the corridor.
$NEW
The room is officially recognized by SIT as one of the safest for new arrivals, and special posters are hung on both doors from the inside, advising new arrivals not to leave the room.
<br/><br/><hr/><br/>
<sup>1</sup> The ventilation hatch is marked as a particularly dangerous area beyond the responsibility of SIT.<br/>
<sup>2</sup> The large lantern was confiscated by SIT and is its property.', 'a66aa291-34f8-47d5-b885-5aa280f2c182') on conflict do nothing;
insert into public.room_translations (id, lang, name, description, room_id) values ('94572dca-9c19-49b3-b52c-c2d632564176', 'ru_RU', 'Автобус', 'II-533-1 внешне напоминает пассажирский автобус. Лобовое и заднее стекла отсутствуют.  
В потолке коридора вкручены тусклые лампочки, излучающие красный свет, создающий эффект удушающего полумрака.
$IMG(INFO)
$AUTHOR(joseph)
$REVERSE
$NEW
Стекла боковых окон не поддаются каким-либо повреждениям: их невозможно поцарапать, разбить или изменить.<br/>
На левой стене, рядом с центральным окном, закреплён аварийный молоток. Под крайним сиденьем обнаружен огнетушитель, находящийся в рабочем состоянии. При использовании он не иссякает, однако вещество, выбрасываемое устройством, мгновенно испаряется с любой поверхности, оставляя после себя выраженный запах разложения.
$NEW
За пределами II-533-1 наблюдается равнина, предположительно идентичная пространству **LQ-474-1**.  
У передней двери расположены руль, водительское сиденье и приборная панель. Все кнопки и переключатели не проявляют функциональности.
$NEW
Магнитола, встроенная в приборную панель, способна воспроизводить одну из двух мелодий. Выбор зависит исключительно от эмоционального состояния субъекта, активировавшего устройство.', '6a7e7d33-4a3c-47b8-8a3f-f698f135184c') on conflict do nothing;
insert into public.room_translations (id, lang, name, description, room_id) values ('d3b07ffd-68d9-4758-8fc8-fbb077e876af', 'ru_RU', 'Красная комната', 'DL-236-1 представляет собой замкнутое пространство, окрашенное в глубокий, насыщенный красный цвет. Освещение в комнате приглушённое, однако достаточно интенсивное, чтобы подчеркнуть каждую деталь интерьера. В одном из углов установлена мягкая кровать, застеленная бордовым постельным бельём, создающим визуальное единство с общей палитрой. На стенах закреплены произведения искусства — картины различных жанров, содержание которых варьируется, однако всегда сопровождается чувством значимости и скрытой символики.
$IMG(INFO)
$AUTHOR(joseph)
$REVERSE
$NEW
*Атмосфера и воздействие:*  
Пребывание в DL-236-1 сопровождается выраженным эмоциональным эффектом: пространство вызывает у субъектов ощущение тепла, лёгкости и почти невесомого состояния. Вместо тревоги, обычно связанной с нахождением в аномальных помещениях, здесь преобладают умиротворение, приятное волнение и внутренняя расслабленность.
$NEW
Одновременно фиксируется более тонкое воздействие: субъекты начинают испытывать чувство скрытой загадки, словно само помещение хранит тайну, недоступную их пониманию. Это состояние сопровождается лёгкой эйфорией и стремлением оставаться в комнате как можно дольше.
<br/><br/><hr/><br/>
**Примечания:**<br/>

- У некоторых субъектов зафиксировано нежелание покидать DL-236-1 даже после официального завершения эксперимента.<br/>
    
- Воздействие комнаты не носит явного деструктивного характера, однако длительное пребывание может привести к формированию психологической зависимости.<br/>
    
- Попытки анализировать произведения искусства внутри помещения показали, что субъекты интерпретируют их содержание по-разному, приписывая им личные смыслы, связанные с их собственными воспоминаниями или желаниями.', '7ba6a2c2-7b2d-401c-a68a-256e32504001') on conflict do nothing;
insert into public.room_translations (id, lang, name, description, room_id) values ('085c56ef-3cad-42b7-8aa8-83c63c742944', 'en_US', 'Red room', 'DL-236-1 is an enclosed space painted in a deep, saturated shade of red. The lighting inside is subdued yet sufficiently bright to emphasize every detail of the interior. In one corner stands a soft bed covered with burgundy linens, visually blending with the overall palette. The walls display various works of art—paintings of different genres—whose content changes but consistently conveys a sense of significance and hidden symbolism.
$IMG(INFO)
$AUTHOR(joseph)
$REVERSE
$NEW
*Atmosphere and Effects:*  
Staying inside DL-236-1 produces a pronounced emotional effect: the space induces feelings of warmth, lightness, and an almost weightless state. Instead of the anxiety typically associated with anomalous chambers, subjects experience calmness, pleasant excitement, and inner relaxation.
$NEW
At the same time, a subtler influence is observed: subjects begin to feel a sense of hidden mystery, as though the room itself harbors a secret beyond their comprehension. This state is accompanied by mild euphoria and a strong desire to remain in the room for as long as possible.
<br/><br/><hr/><br/>
**Notes:**<br/>

- Some subjects demonstrated reluctance to leave DL-236-1 even after the official end of the experiment.<br/>
    
- While the room’s influence is not overtly destructive, prolonged exposure can lead to the development of psychological dependence.<br/>
    
- Attempts to analyze the artworks within the chamber revealed that subjects interpret their content differently, assigning personal meanings tied to their own memories or desires.', '7ba6a2c2-7b2d-401c-a68a-256e32504001') on conflict do nothing;
insert into public.room_translations (id, lang, name, description, room_id) values ('b8d1be8c-ece0-4d95-b492-cf4a40da4c98', 'en_US', 'Field', 'LQ-474-1 is a presumably infinitely large field. The doors, which should be in the walls, stand in an open area and do not appear to be supported by anything visible.
$IMG(INFO)
$AUTHOR(joseph)
$REVERSE
$NEW
When the doors are opened from the inside, the subject sees the adjacent rooms and can enter them.
$NEW
Upon discovery of the room, the subject was found inside and was taken to a branch of the organization and interrogated.During the interrogation, it was established that after 20 minutes in the “Field,” the subject began to experience positive emotions for no apparent reason.
$NEW
In the 16th year, a squad of 12 volunteers was sent into the field. A portable radio receiver was installed at the door to receive signals from the squad''s walkie-talkies.
$NEW
The squad covered a distance of 14.5 km to the south and did not make further contact.Three days after the “incident,” a group of four people was sent to search for the first squad. The squad covered a distance of 15 km to the south and did not make contact again.
$NEW
It was decided to terminate the expeditions.', '749f3caa-d39f-411b-b67e-71c3559d1eb8') on conflict do nothing;
insert into public.room_translations (id, lang, name, description, room_id) values ('21116fbe-216d-40d9-b166-98626ac649fb', 'ru_RU', 'Город котов', 'EZ-314 располагает в себе 5 инвалидных колясок и 9 котов: 2 из них мяукают постоянно, 5 мяукают, когда видят субъекта, 2 не издают никаких звуков.
$IMG(INFO)
$AUTHOR(mark)
$REVERSE
$NEW
*Инвалидные коляски:* Все инвалидные коляски выглядят старыми, но пригодны для использования, на передней части спинки расположена надпись "TILDA". Если попробовать вытащить коляски из комнаты, коты начинают агрессировать (см. Поведение котов).
$NEW
*Коты:* Все 9 котов разных пород и кардинально разных внешних видов. Они дружелюбны к субъекту до определенного периода времени или до совершения субъектом определенных действий (см. Исследования EZ-314).
$IMG(https://ik.imagekit.io/voeemsog/cats.jpg?updatedAt=1763755557969, 500px)
$REVERSE
$NEW
*Поведение котов:* В определенный момент нахождения субъекта в комнате, или при попытке выкатить коляски из комнаты, коты начинают агрессировать: громко шипеть и царапаться, после чего каждый, кроме двух молчаливых котов, превращается в неизвестное гуманоидное существо, которое легким движением ломает субъекту позвоночник.
$NEW
*Исследования EZ-314:* Комната не исследована до конца и категорически не рекомендуется к посещению. Поведение котов не похоже ни на что в Воеемсоге и, судя по всему, не подчиняется никаким правилам.', 'bab87c18-6468-4779-b815-67348e9053a9') on conflict do nothing;
insert into public.room_translations (id, lang, name, description, room_id) values ('535114ca-7b64-4ac1-ae82-3884795b4b52', 'en_US', 'Bus', 'II-533-1 outwardly resembles a passenger bus. The front and rear windshields are absent.  
Dim bulbs, screwed into the ceiling of the corridor, emit a crimson glow that saturates the space with a suffocating half-light.
$IMG(INFO)
$AUTHOR(joseph)
$REVERSE
$NEW
The side windows cannot be damaged by any means: they cannot be scratched, shattered, or altered.<br/>
On the left wall, beside the central window, an emergency hammer is mounted. Beneath the rearmost seat, a functional fire extinguisher has been discovered. When discharged, it does not deplete; however, the substance it expels evaporates instantly upon contact with any surface, leaving behind a pronounced stench of decay.
$NEW
Beyond the confines of II-533-1 lies a plain, presumably identical to the environment of LQ-474-1. At the front door are a steering wheel, a driver’s seat, and a control panel. None of the buttons or switches exhibit any functionality.
$NEW
The radio, integrated into the dashboard, is capable of playing one of two melodies. The selection is determined solely by the emotional state of the subject who activates the device.', '6a7e7d33-4a3c-47b8-8a3f-f698f135184c') on conflict do nothing;
insert into public.room_translations (id, lang, name, description, room_id) values ('fd1fed04-32c9-4cbc-9141-6d55f08d4b10', 'ru_RU', 'Столовая 1', 'Внутри FF-307-1 располагается большой деревянный стол с покрытием из неопределенного материала, который обладает свойством не поддаваться физическим изменениям и исключительно долговечен. Вокруг стола размещено пять деревянных стульев, также устойчивых к любым попыткам повреждения.
$IMG(INFO)
$AUTHOR(mark)
$REVERSE
$NEW
На столе расставлены столовые приборы, выполненные из неопознанного металла, который сохраняет свою структуру в любых условиях. Все приборы имеют стандартные формы и размеры, не поддаются коррозии и не тускнеют с течением времени.
$NEW
В углу помещения находится холодильник, который содержит неиссякаемое количество продуктов питания, включая бутылки с водой, упаковки салата и свежие фрукты. Наблюдается, что содержимое холодильника обновляется автоматически в случае их использования или исчезновения.
$NEW
Над раковиной, выполненной из антикоррозийного материала, висит металлическая сеточка с губкой, которая также поддерживает свою структуру и гигиенические свойства в течение длительного периода времени.
$NEW
При мытье посуды за собой или порче продуктов из холодильника появляется неизвестный объект и убивает субъекта.', 'dea77c22-d56c-49d5-a138-06bf0eafb572') on conflict do nothing;
insert into public.room_translations (id, lang, name, description, room_id) values ('dec4020c-4e41-41ae-966d-6dec98c83fb5', 'ru_RU', 'Цветок', 'NW-504-1 представляет собой камеру неизвестного назначения. Стены помещения испещрены глубокими царапинами, напоминающими следы когтей крупного животного. Их направление и расположение хаотичны, однако создаётся впечатление, будто они нанесены с предельной силой и в состоянии аффекта. Попытки инструментального анализа показали, что следы имеют значительную глубину, превышающую допустимые пределы для воздействия известными биологическими видами.
$IMG(INFO)
$AUTHOR(joseph)
$REVERSE
$NEW
В центре комнаты установлена ваза, изготовленная из гладкого чёрного материала, происхождение которого не установлено. Внутри вазы расположен цветок, не поддающийся идентификации. Его лепестки обладают мягким свечением, различимым даже при минимальном освещении. Несмотря на многочисленные попытки воздействия — механического, химического или термического — цветок сохраняет свою структуру и внешний вид, не проявляя признаков повреждений или увядания.
$NEW
*Воздействие на субъекта:*  
Контакт с цветком — будь то визуальный, тактильный или даже нахождение в непосредственной близости — оказывает выраженное положительное влияние на психическое состояние субъекта. Испытуемые описывают чувство внутреннего покоя, умиротворения и освобождения от тревожных мыслей. В ряде случаев отмечалось снижение физиологических показателей стресса: нормализация пульса, стабилизация дыхания и снижение уровня тревожности.
<br/><br/><hr/><br/>
**Примечания:**<br/>

- Воздействие цветка не сопровождается побочными эффектами, однако его природа остаётся неизвестной.<br/>
    
- Царапины на стенах помещения не оказывают прямого влияния на субъектов, однако вызывают у некоторых испытуемых чувство лёгкой настороженности и предположение о присутствии некогда находившегося здесь существа.<br/>
    
- На данный момент неизвестно, связаны ли следы когтей со свойствами цветка или они имеют независимое происхождение.', '76734021-76a8-4175-91f7-9d952f774ebc') on conflict do nothing;
insert into public.room_translations (id, lang, name, description, room_id) values ('268923cf-0dd5-4f25-9b93-1920d20e4873', 'en_US', 'Flower', 'NW-504-1 is a chamber of unknown purpose. The walls are marked with deep gouges resembling the claw marks of a large animal. Their orientation and distribution are chaotic, yet they appear to have been inflicted with overwhelming force and in a state of frenzy. Instrumental analysis has confirmed that the depth of these markings far exceeds the thresholds achievable by any known biological species.
$IMG(INFO)
$AUTHOR(joseph)
$REVERSE
$NEW
At the center of the chamber stands a vase, crafted from a smooth black material of indeterminate origin. Within it rests a flower that defies classification. Its petals emit a soft luminescence, visible even under minimal lighting. Despite repeated attempts at mechanical, chemical, and thermal interference, the flower retains its structure and appearance, showing no signs of damage or decay.
$NEW
*Effects on Subjects:*  
Contact with the flower—whether visual, tactile, or through mere proximity—produces a pronounced positive effect on the subject’s mental state. Test participants consistently describe feelings of inner calm, serenity, and relief from intrusive or anxious thoughts. In some cases, physiological indicators of stress have been observed to decrease: heart rate stabilizes, breathing normalizes, and levels of anxiety diminish.
<br/><br/><hr/><br/>
**Notes:**<br/>

- The flower’s influence exhibits no known side effects, though its true nature remains unidentified.<br/>
    
- The claw marks on the walls exert no direct impact on subjects, yet often evoke unease or suspicion of a once-present entity.<br/>
    
- It remains unknown whether the claw marks are intrinsically linked to the flower’s properties or if they stem from an entirely independent cause.', '76734021-76a8-4175-91f7-9d952f774ebc') on conflict do nothing;
insert into public.room_translations (id, lang, name, description, room_id) values ('5c42cf2d-b885-40bc-8b2a-a4ea10fb4c77', 'ru_RU', 'Поле', 'LQ-474-1 представляет собой предположительно бесконечно-большое поле. Двери, которые должны находиться в стенах, стоят в открытой местности и ни на что видимое не опираются.
$IMG(INFO)
$AUTHOR(joseph)
$REVERSE
$NEW
При открытии дверей изнутри, субъект видит соседние комнаты и может в них пройти.
$NEW
При обнаружении комнаты, в ней находился субъект, которого доставили в филиал организации и допросили.
В ходе допроса удалось установить, что по прошествии 20 минут нахождения в "Поле", субъект начал ощущать положительные эмоции без явных на то причин.
$NEW
В 16г в поле был отправлен отряд, состоящий из 12 добровольцев. У дверей был установлен переносной радиоприемник, на который принимались сигналы с раций отряда.
$NEW
Отряд преодолел расстояние в 14.5 км в сторону юга и больше на связь не выходил.
Через 3 дня после "инцидента" была выслана группа из 4-х человек для поиска первого отряда. Отряд преодолел расстояние в 15 км в сторону юга и больше на связь не выходил.
$NEW
Было принято решение прекратить экспедиции.', '749f3caa-d39f-411b-b67e-71c3559d1eb8') on conflict do nothing;
insert into public.room_translations (id, lang, name, description, room_id) values ('f7c31583-9ad9-4e79-bb5b-530d31200973', 'ru_RU', 'Оно хочет играть', 'GG-217-1 визуально имитирует стандартную детскую площадку, размещённую под искусственным серым небом без источника света. Воздух здесь статичен, будто замёрзший во времени, а слабый запах ржавчины и влажного дерева сопровождает субъекта с момента входа. Поверхность пола — мягкое резиновое покрытие с узором, стилизованным под траву и цветы, однако прикосновение к нему вызывает ощущение сырой ткани, натянутой над плотным металлом.
$IMG(INFO)
$AUTHOR(mark)
$REVERSE
$NEW
В центре площадки расположены четыре качели с изношенными верёвками и две металлические горки, покрытые тёмными пятнами, отдалённо напоминающими старую кровь. Каждая конструкция слегка покачивается, даже при отсутствии движения воздуха. На одной из качелей, лицом к входу, сидит **объект SIT: P-001-BF — "Френк"**. Его фигура словно застыла в вечном детском безмятежии, но её присутствие вызывает у большинства субъектов необъяснимую тревогу.
$NEW
*Психоэмоциональное воздействие:*  
GG-217-1 усиливает эмоциональные состояния всех субъектов, находящихся внутри. Радость становится эйфорией, беспокойство — паникой, сомнение — парализующим страхом. Этот эффект выражен особенно остро при групповых посещениях: эмоциональные "всплески" усиливаются за счёт взаимного резонанса между субъектами.
$NEW
Если все субъекты испытывают положительные эмоции, "Френк" начинает плавно раскачиваться. Его движения в этот момент производят лёгкий, почти музыкальный скрип, вызывающий у присутствующих чувство детской ностальгии и безопасности.
$NEW
Однако если хотя бы один субъект испытывает негативные чувства — страх, агрессию, зависть, тревогу или даже скуку — Френк прекращает качаться. Он медленно поднимает голову и поворачивает её в сторону источника эмоционального "диссонанса". После этого он просто смотрит — молча, не мигая, прямо в глаза субъекту. Длительность этого взгляда варьируется от нескольких секунд до минуты. На фоне взгляда субъекты часто начинают плакать, трястись или терять ориентацию в пространстве.
$NEW
- **Дружелюбие:** При демонстрации позитивных намерений и спокойствия Френк остаётся безвредным. Субъекты могут взаимодействовать с ним: подавать руку, касаться одежды или даже играть рядом. Он реагирует на такое поведение лёгким кивком или улыбкой, после чего возвращается к раскачиванию.
<br/><br/>
- **Агрессия или негатив:** При любом проявлении враждебности — словесной, невербальной или мысленной — Френк атакует. Его действия быстры и бесшумны. Первичная атака направлена не на устранение, а на подавление: объект сдирает лицо субъекта с хирургической точностью, оставляя его в сознании, но в состоянии предельного физического и эмоционального ужаса.
<br/><br/>
**Повторный контакт:**  
Если пострадавший субъект остаётся в помещении более 60 минут после нападения или пытается войти в GG-217-1 повторно, Френк атакует вновь, на этот раз с летальным исходом. Перед повторной атакой объект смотрит на субъекта в течение 5–10 секунд, как будто оценивает его состояние, а затем молча встаёт с качели.
<br/><br/>
**Дополнительно:**  
Некоторые исследователи утверждали, что при полном эмоциональном согласии группы и спокойном взаимодействии с Френком, качели начинают раскачиваться одновременно, несмотря на отсутствие ветра. В эти редкие моменты помещение наполняется тихой мелодией, будто играющей из старой музыкальной шкатулки. Ни один из приборов эту мелодию не зафиксировал.', '96108535-61ac-4c20-b7e5-47e540144d5a') on conflict do nothing;
insert into public.room_translations (id, lang, name, description, room_id) values ('09158688-9e8e-4127-be56-ab783c88b6f6', 'en_US', 'It wants to play', 'GG-217-1 manifests as a standard children’s playground, situated beneath an artificial gray sky devoid of any discernible light source. The air is unnaturally still, suspended as though time itself has halted, and carries a faint scent of rust and damp wood that clings to those who enter. The ground is covered with a soft, rubber-like surface patterned with stylized grass and flowers; however, contact reveals the unsettling texture of wet fabric stretched taut over dense metal.
$IMG(INFO)
$AUTHOR(mark)
$REVERSE
$NEW
At the center stand four swings with frayed ropes and two metal slides, all subtly swaying despite the absence of wind. Dark stains—suggestive of dried blood—discolor the surfaces of the slides. One of the swings, positioned to face the entrance, is perpetually occupied by **SIT Object P-001-BF**, referred to as **“Frank.”** His motionless figure radiates an aura of childlike calm, yet evokes in most observers an overwhelming and inexplicable unease.
$NEW
*Psycho-Emotional Effects:*  
GG-217-1 exerts an amplifying effect upon all emotional states experienced within. Joy escalates to euphoria, anxiety mutates into panic, and uncertainty expands into paralyzing dread. These effects are magnified in groups, where emotions begin to **resonate and cascade**, creating collective surges of intensity.
$NEW
When **all subjects experience positive emotions**, Frank begins to swing gently. The faint creak of the ropes produces a **musical, nostalgic resonance**, frequently evoking sensations of childhood safety and peace.
$NEW
However, **the emergence of even a single negative emotion**—fear, anger, envy, anxiety, or boredom—causes Frank to cease swinging. He slowly raises his head and turns it **toward the emotional source**. He does nothing but **fix his gaze directly upon the subject**, unblinking and silent. This gaze may persist for several seconds to a full minute. During this interval, subjects often exhibit **weeping, tremors, or severe spatial disorientation**.
$NEW
- **Benevolence:** When approached without hostility, Frank is **non-aggressive**. Subjects may offer a hand, touch his clothing, or engage in play nearby. He responds with a faint nod or smile before resuming his swing.
<br/><br/>
- **Aggression Trigger:** Any sign of **hostility** — verbal, physical, or mental—provokes immediate retaliation. Frank attacks with **unnerving silence and extraordinary speed**. His initial assault aims at **suppression rather than execution**, surgically removing the subject’s face with inhuman precision, leaving the victim conscious but in a state of **catastrophic physical and psychological trauma**.
<br/><br/>
**Repeat Exposure:**  
If the mutilated subject remains within GG-217-1 for **longer than sixty minutes** following the initial incident, or attempts to re-enter at a later time, Frank attacks again — this time with lethal intent. Prior to the fatal assault, Frank fixes the subject with a prolonged, silent stare lasting five to ten seconds, as if conducting an assessment, before rising from the swing.
<br/><br/>
**Additional Notes:**  
Researchers have observed that when groups achieve complete emotional synchrony and engage peacefully with Frank, **all swings begin to move in unison** despite the stagnant air. In these rare instances, the space fills with a delicate melody, reminiscent of an antique music box. **No recording device has ever captured this sound.**', '96108535-61ac-4c20-b7e5-47e540144d5a') on conflict do nothing;
insert into public.room_translations (id, lang, name, description, room_id) values ('34caceeb-ee52-4537-9b52-fec328ff8969', 'ru_RU', 'Лестница вверх 1', ' BP-429-1 переходит в короткую, но круто восходящую лестницу. Потолок низкий — около 2 метров — и нависает над субъектом, вызывая лёгкое клаустрофобное ощущение, особенно при приближении к лестничной части. Стены окрашены в выцветший оливково-серый цвет и местами покрыты пятнами, похожими на водяные разводы. На всём протяжении коридора царит сухая тишина, нарушаемая лишь эхом собственных шагов.
$NEW
По обеим стенам размещены **семейные фотографии в деревянных рамах**. Всего — 18 штук, по 9 с каждой стороны. Изображения различны: пожилые пары, родители с детьми, групповые портреты на фоне неузнаваемых интерьеров. Лица улыбаются, но улыбки кажутся напряжёнными, слишком широкими. Все фотографии сняты в однотонной жёлтой гамме, как будто через старый светофильтр или потускневшую фотоплёнку. Неизвестны личности на фото — ни одна попытка идентификации не увенчалась успехом. Некоторые субъекты утверждали, что лица на снимках им знакомы, но не могли назвать ни имён, ни деталей.
$NEW
Фотографии обладают **аномальной стойкостью**: их невозможно разбить или сжечь. При попытке сфотографировать или скопировать изображения они искажаются — лица на снимках размываются, а фон исчезает.
$NEW
*Переход в лестницу:*  
После прохождения коридора субъект сталкивается с переходом на **лестницу из старого дерева**, врезанную в корпус комнаты. Лестница состоит из 12 ступеней и резко уходит вверх под углом около 50°. Поручней нет. Деревянные доски скрипят, но не прогибаются и не ломаются, даже при значительном весе. При шаге на третью ступень слышен еле уловимый **щелчок**, источник которого не удалось установить — ни одна аппаратура не фиксирует посторонних звуков в этот момент.
$NEW
Слева, над шестой ступенью, висит металлическая табличка с надписью:  
**«Ты уже был здесь?»**  
Надпись выполнена вручную, фломастером, и, по словам наблюдателей, ранее отсутствовала.
$NEW
*Верхняя дверь:*  
Лестница ведёт к массивной двери, на которой закреплён **предупредительный плакат**, установленный SIT.
<br/><br/><hr/><br/>
**Примечания:**<br/>

- BP-429-1 — первое помещение, зафиксированное SIT, ведущее на **второй этаж** Воеемсога.<br/>
    
- Фотографии изъяты и принадлежат организации SIT.', '161cfb09-a5d8-416f-94f1-f51bf128e03b') on conflict do nothing;
insert into public.room_translations (id, lang, name, description, room_id) values ('1546f050-599a-4cb9-b8d2-2a175e42452c', 'en_US', 'City of cats', 'EZ-314 has 5 wheelchairs and 9 cats: 2 of them meow constantly, 5 meow when they see the subject, and 2 do not make any sounds.
$IMG(INFO)
$AUTHOR(mark)
$REVERSE
$NEW
*Wheelchairs:* All wheelchairs look old but are usable. The word “TILDA” is written on the front of the backrest. If you try to remove the wheelchairs from the room, the cats will become aggressive (see Cat Behavior).
$NEW
*Cats:* All 9 cats are of different breeds and have radically different appearances. They are friendly toward the subject until a certain period of time has passed or until the subject performs certain actions (see Research EZ-314).
$IMG(https://ik.imagekit.io/voeemsog/cats.jpg?updatedAt=1763755557969, 500px)
$REVERSE
$NEW
*Cat behavior:* At a certain point while the subject is in the room, or when attempting to roll the wheelchairs out of the room, the cats become aggressive: they hiss loudly and scratch, after which each of them, except for two silent cats, transforms into an unknown humanoid creature that breaks the subject''s spine with a slight movement.
$NEW
*EZ-314 Research:* The room has not been fully explored and is strongly discouraged from visiting. The cats'' behavior is unlike anything else in Voeyemsog and, by all accounts, does not follow any rules.', 'bab87c18-6468-4779-b815-67348e9053a9') on conflict do nothing;
insert into public.room_translations (id, lang, name, description, room_id) values ('2e518329-adda-47f8-85bc-e96782bcffad', 'en_US', 'Stairway up 1', 'BP-429-1 extends into a short yet steep upward staircase. The ceiling hangs low — scarcely two meters — pressing down upon the subject and evoking a mild sense of claustrophobia, particularly at the foot of the ascent. The walls, painted a faded olive-gray, are blemished with stains resembling ancient watermarks. The atmosphere is steeped in a dry, oppressive silence, broken only by the echo of the subject’s own footsteps.
$NEW
Along both walls hang **family photographs in wooden frames** — eighteen in total, nine per side. The images vary: elderly couples, parents with children, group portraits taken in indeterminate interiors. All faces wear smiles, but the expressions are unnervingly taut — **too wide, too forced**. Each photograph is rendered in a flat yellow tone, as if viewed through the haze of a faded film. The individuals remain unidentified; recognition efforts have universally failed. Certain subjects claim the faces seem familiar, though they cannot recall names or details.
$NEW
The photographs possess **anomalous resilience**: they cannot be shattered or set aflame. Attempts to capture or reproduce them yield only distorted results — faces dissolve into blurs, while backgrounds vanish entirely.
$NEW
*Transition to the Staircase:*  
At the corridor’s end stands a **steep staircase of aged wood**, seamlessly integrated into the structure. It consists of twelve steps, rising sharply at an angle of ~50°. No handrails are present. The boards creak beneath each footfall, yet neither bend nor splinter, regardless of the weight imposed. Upon stepping onto the third stair, a **barely perceptible click** is heard. Its source remains unidentified, and no recording equipment has captured the sound.
$NEW
On the left wall, above the sixth step, hangs a **metal plaque** bearing a handwritten inscription in marker:  
**“Have you been here before?”**  
Observers attest that this message **had not been visible previously**.
$NEW
*The Upper Door:*  
At the top of the staircase stands a **heavy door**, upon which is affixed a **SIT-issued warning poster**.
<br/><br/><hr/><br/>
**Notes:**<br/>

- BP-429-1 is the **first documented chamber** by SIT to provide access to the **second floor** of Voeemsog.<br/>
    
- All photographs have been confiscated and are retained as SIT property.', '161cfb09-a5d8-416f-94f1-f51bf128e03b') on conflict do nothing;
insert into public.room_translations (id, lang, name, description, room_id) values ('c1555b45-e20b-46d4-a7c2-66ce93625f36', 'ru_RU', 'Дальше бога нет', 'Оба входа в AK-610-1 оформлены как массивные двустворчатые двери, на которых сотрудниками SIT закреплены предупреждающие объявления:
$IMG(INFO)
$AUTHOR(mark)
$REVERSE
$NEW
> 🚫 ВНИМАНИЕ: Помещение AK-610-1 классифицировано как смертельно опасное. <br/>
> Доступ разрешён исключительно по протоколу AA-3.  <br/>
> Проникновение без разрешения приравнивается к преднамеренному самоубийству.  <br/>
> Обратного пути не предусмотрено.<br/>
$NEW
*Механика воздействия:*  
Немедленно после пересечения порога дверь за субъектом автоматически блокируется. Ни физическое воздействие, ни применение инструментов взлома, ни использование специализированных устройств не позволяют открыть её вновь. Само помещение не оказывает влияния на субъект, если тот остаётся неподвижным.
$NEW
Однако любое перемещение активирует аномальные свойства зала. С каждым шагом у субъекта фиксируются нарастающие физические повреждения, возникающие без видимого источника. Интенсивность и характер травм зависят от ширины шага:
$NEW
- Узкие шаги вызывают множественные лёгкие, но крайне мучительные повреждения — ссадины, переломы фаланг пальцев, вывихи суставов, разрывы мышечных волокон. <br/>
    
- Широкие шаги провоцируют меньшее число, но значительно более тяжёлых увечий — разрывы внутренних органов, переломы рёбер, массивные кровотечения.<br/>
    
$NEW
Независимо от выбранной стратегии движения, к концу зала субъект оказывается в состоянии, близком к летальному исходу: фиксируются отказы дыхательной системы, критические внутренние повреждения, потеря сознания.
$NEW
*Интерьер и атмосфера:*  
Вдоль стен помещения расположены предметы религиозного характера, относящиеся к различным конфессиям, оставленные, по-видимому, в отчаянной попытке искупления: <br/>

- обугленные свечи, стоящие в слое рассыпанной золы;<br/>
    
- иконы, исписанные молитвенными надписями, но залитые запёкшейся кровью, делающей текст неразборчивым;<br/>
    
- католические распятия, обращённые лицевой стороной к стене, некоторые с вырванными гвоздями;<br/>
    
- экземпляры Библии и Корана с вырванными страницами, брошенные в углах.<br/>
   $NEW

Атмосфера зала насыщена ощущением чужого раскаяния. Испытуемые сообщали, что испытывали чувство пристального взгляда, исходящего из тёмного свода потолка, либо слышали за спиной тяжёлое дыхание, сопровождающее каждый их шаг.
$NEW

*Завершение прохождения:*  
На противоположной стороне зала располагается вторая дверь, идентичная входной. Она открыта и представляет собой единственный возможный выход.
<br/><br/><hr/><br/>
Примечания:<br/>

- В помещении не зафиксировано присутствие каких-либо сущностей; воздействие носит исключительно пространственный характер.<br/>
    
- За всю историю SIT не зарегистрирован ни один случай успешного прохождения зала до конца.<br/>
$NEW
$IMG(https://ik.imagekit.io/voeemsog/troseal?updatedAt=1763756405895, 300px)
$NEW

За всю историю SIT зарегистрирован и скрыт ОДИН случай успешного прохождения зала до конца.', '5d09d9c9-ba45-44ea-a3b9-7a8be0c83484') on conflict do nothing;
insert into public.room_translations (id, lang, name, description, room_id) values ('2d987285-2061-4604-a2fa-192e2eaa5efd', 'en_US', 'No God Beyond', 'Both entrances to AK-610-1 are constructed as massive double doors, upon which SIT personnel have affixed stark warning notices:
$IMG(INFO)
$AUTHOR(mark)
$REVERSE
$NEW
> 🚫 ATTENTION: Chamber AK-610-1 is classified as lethal.   <br/>
> Access is permitted exclusively under Protocol AA-3.   <br/>
> Entry without authorization is equated to deliberate suicide.   <br/>
> There is no return.<br/>
$NEW
*Mechanism of Effect:*  
Immediately upon crossing the threshold, the door behind the subject seals itself. Neither physical force, nor specialized lock-breaking tools, nor advanced devices have proven capable of reopening it. The chamber itself exerts no influence on the subject, provided they remain motionless.
$NEW
However, any attempt at movement activates the anomalous properties of the hall. With each step, the subject sustains escalating physical trauma, arising without visible cause. The severity and character of these injuries are determined by the breadth of the stride:
$NEW
- Narrow steps inflict numerous minor yet excruciating wounds — abrasions, phalangeal fractures, joint dislocations, and torn muscle fibers. <br/>
    
- Wide steps induce fewer but significantly more catastrophic injuries — ruptured internal organs, fractured ribs, and massive hemorrhaging.<br/>
    
$NEW
Regardless of movement strategy, by the time the subject reaches the far end of the chamber they are in a state nearing fatal collapse: respiratory failure, critical internal damage, and eventual loss of consciousness are consistently recorded.
$NEW
*Interior and Atmosphere:*  
Lining the chamber’s walls are religious artifacts of disparate faiths, apparently left in desperate acts of repentance: <br/>

- charred candles standing in layers of scattered ash;<br/>
    
- icons inscribed with prayers, yet smeared with congealed blood obscuring the text;<br/>
    
- Catholic crucifixes turned to face the walls, some with their nails wrenched out;<br/>
    
- torn copies of the Bible and Qur’an, discarded in the corners.<br/>
   $NEW

The atmosphere of the hall is saturated with an alien sense of remorse. Subjects report sensations of an unseen gaze descending from the dark vault above, or of heavy breathing behind them, synchronized with their every step.
$NEW

*Termination of Passage:*  
At the opposite end lies a second door, identical to the first. It remains open, representing the sole possible exit.
<br/><br/><hr/><br/>
Notes:<br/>

- No entities have been recorded within the chamber; the phenomenon is entirely spatial in nature.<br/>
    
- Throughout SIT’s operational history, no subject has ever been documented successfully reaching the far side alive.<br/>
$NEW
$IMG(https://ik.imagekit.io/voeemsog/troseal?updatedAt=1763756405895, 300px)
$NEW

Throughout SIT’s operational history, ONE subject has ever been secretly documented successfully reaching the far side alive.', '5d09d9c9-ba45-44ea-a3b9-7a8be0c83484') on conflict do nothing;
insert into public.room_translations (id, lang, name, description, room_id) values ('3ba52062-55aa-48dd-90d1-c7fcb5e34309', 'ru_RU', 'Оазис', 'Стены помещения окрашены в зелёный цвет и полностью покрыты обильной растительностью, включающей широкий спектр живых растений и цветов.  
Флора формирует устойчивый микроклимат, насыщенный кислородом и фитонцидами, которые оказывают благоприятное воздействие на организм субъекта: снижают уровень стресса, повышают общий тонус и способствуют стабилизации эмоционального состояния.
$IMG(INFO)
$AUTHOR(joseph)
$REVERSE
$NEW
В центре комнаты расположен диван с мягкими подушками.  
Освещение в помещении естественное и мягкое, что усиливает положительный эффект, создаваемый средой комнаты.
$NEW
Субъекты, находившиеся в NX-508-1, отмечают полное исчезновение чувства усталости и возвращение ясности ума. У некоторых наблюдается улучшение памяти, концентрации и способности к решению сложных задач.  
Даже кратковременное пребывание в помещении способствует восстановлению внутренних ресурсов и снятию психического напряжения.
$NEW
Более продолжительное нахождение в NX-508-1 сопровождается ощущением лёгкости, покоя и гармонии с окружающей средой. Субъекты описывают это состояние как «внутреннее обновление» или «возвращение к самому себе».  
Помещение не оказывает никаких негативных последствий: напротив, его влияние на организм и психику исключительно положительно и безопасно.
$NEW
Комната также способствует физическому восстановлению. При нахождении в NX-508-1 ускоряется заживление мелких повреждений кожи, исчезают головные боли и мышечные зажимы. У некоторых субъектов фиксировалось улучшение зрения и общего восприятия цветов и оттенков.  
Эти эффекты сохраняются и после выхода из комнаты, хотя со временем постепенно ослабевают.', '9f561fd8-bf28-4bd5-a55c-1d5acb054aed') on conflict do nothing;
insert into public.room_translations (id, lang, name, description, room_id) values ('63d1fe37-fd0e-4850-876d-ea2e7df51139', 'en_US', 'Oasis', 'The walls of the chamber are painted green and entirely overgrown with abundant vegetation, comprising a wide variety of living plants and flowers.  
This flora establishes a stable microclimate, enriched with oxygen and phytoncides, which exert a distinctly beneficial influence on the subject’s body: reducing stress levels, enhancing vitality, and promoting stabilization of the psycho-emotional state.
$IMG(INFO)
$AUTHOR(joseph)
$REVERSE
$NEW
At the center of the room stands a sofa with soft cushions.  
The lighting is natural and gentle, amplifying the restorative effect created by the natural environment.
$NEW
Subjects who have remained within NX-508-1 report the complete disappearance of fatigue and the return of mental clarity. In several cases, improvements in memory, concentration, and the ability to solve complex problems have been observed.  
Even brief exposure to the chamber contributes to the replenishment of inner resources and the alleviation of psychological strain.
$NEW
Prolonged presence in NX-508-1 is accompanied by sensations of lightness, tranquility, and harmony with the surrounding environment. Subjects describe this state as an “inner renewal” or a “return to oneself.”  
The chamber produces no adverse effects; on the contrary, its influence on both body and mind is exclusively positive and demonstrably safe.
$NEW
The room also facilitates physical recovery. During exposure to NX-508-1, the healing of minor skin injuries accelerates, headaches and muscular tension dissipate, and in some cases improvements in vision and color perception have been recorded.  
These effects persist after leaving the chamber, though they gradually diminish over time.', '9f561fd8-bf28-4bd5-a55c-1d5acb054aed') on conflict do nothing;
insert into public.room_translations (id, lang, name, description, room_id) values ('f19ac969-5ad7-412d-99ef-38fc472fa995', 'ru_RU', 'Кошмарные муки', 'BU-614-1 — узкий, слабо освещённый коридор. Его стены покрыты шероховатым чёрным материалом, напоминающим обугленную ткань, при касании издающим негромкий, будто задушенный скрип. Пол представляет собой ровную металлическую поверхность, отражающую свет только под углом и создающую иллюзию того, что ты стоишь на зеркале, в котором не отражается ничего, кроме твоих ног. Потолок теряется во тьме, несмотря на расположенные на нём источники тусклого, мерцающего освещения.
$IMG(INFO)
$AUTHOR(mark)
$REVERSE
$NEW
Как только субъект делает шаг внутрь, дверь за его спиной захлопывается. Ни физическое воздействие, ни технические средства, ни удалённое вмешательство не позволяют открыть её до завершения действия аномалии.
$NEW
*Психологическое воздействие:*  
BU-614-1 начинает влиять на психику практически мгновенно. Уже через 2–3 секунды пребывания субъект ощущает сильнейшее давление в области висков, сопровождаемое дрожью в конечностях и чувством непонятной, чужеродной вины. В помещении возникают слуховые галлюцинации: негромкий шёпот, будто исходящий одновременно со всех сторон, без различимых источников. Через несколько секунд он становится навязчивым и сливается в повторяющуюся фразу, которую субъект запоминает, даже покинув комнату (у всех испытуемых — разная, но связанная с глубинными личными страхами).
$NEW
С каждой секундой нарастают тревожные мысли, сознание дробится — субъект теряет ощущение личности, забывает своё имя, цель пребывания, а затем и само осознание того, что он человек. Его начинают терзать образы, визуализированные прямо на периферии зрения: обугленные руки, пустые лица, стеклянные глаза, смотрящие сквозь него. Комната "переучивает" реальность, заставляя поверить, что всё происходящее в ней — единственная и вечная правда.
$NEW
Ощущение времени в BU-614-1 катастрофически искажается. Испытуемым кажется, что они провели внутри не менее 10 часов. Некоторые описывали "вторую жизнь", полную боли, одиночества и безысходности. Фактическая продолжительность воздействия — от 15 до 20 секунд.
$NEW
*Аномальное устройство:*  
В глубине коридора, на полке, выдвинутой из стены, располагается небольшое устройство, внешне напоминающее панель управления лифтом. Его единственный элемент — плоская белая кнопка с выгравированным черепом. Психологическое состояние субъекта на момент обнаружения устройства делает кнопку единственным источником "надежды". Почти все испытуемые нажимают её без колебаний.
$NEW
При нажатии на кнопку происходит мгновенная остановка всех биологических процессов — смерть наступает в течение 0,2 секунды. Одновременно с этим дверь отпирается, а помещение возвращается в исходное нейтральное состояние, готовое к следующему "приему".
$NEW
*Дополнительно:*  
Обнаружены случаи, при которых субъекты отказывались нажимать кнопку и переносили весь временной эффект до конца. Восстановление психики у них заняло от 8 до 14 месяцев, при этом наблюдались устойчивые симптомы диссоциативных расстройств, глубоких депрессий и утраты чувства реальности. Один из субъектов описал BU-614-1 как "бесконечную комнату, которая понимает тебя лучше, чем ты сам".', 'f5574f7c-8661-4981-a34c-059fc2c56a6c') on conflict do nothing;
insert into public.room_translations (id, lang, name, description, room_id) values ('ce4d6299-a884-4d4f-82c8-2d3a4f954b27', 'en_US', 'Agony Beyond Nightmare', 'BU-614-1 is a narrow, dimly lit passageway. Its walls are sheathed in a coarse, black material resembling charred fabric, which emits a faint, muffled creak when touched. The floor consists of a smooth metallic surface that reflects light only at select angles, creating the illusion of standing upon a mirror — one that reflects nothing but the subject’s own feet. The ceiling recedes into impenetrable darkness, despite the presence of faint, flickering fixtures mounted above.
$IMG(INFO)
$AUTHOR(mark)
$REVERSE
$NEW
Upon entry, the door slams shut behind the subject. It cannot be reopened by physical force, technical means, or remote intervention until the anomaly has completed its cycle.
$NEW
*Psychological Effects:*  
The influence of BU-614-1 begins within seconds. After 2–3 seconds, subjects report an acute pressure about the temples, trembling in the limbs, and a profound, inexplicable sense of guilt. Auditory hallucinations soon arise — a soft whisper emanating from all directions at once, lacking any identifiable source. This whisper intensifies, resolving into a single looping phrase that lingers in memory long after departure (each phrase is unique, often reflecting the subject’s deepest personal fears).
$NEW
Intrusive thoughts escalate with each passing moment. The subject’s identity begins to disintegrate: first their name, then their purpose, and finally even the recognition of themselves as human. Haunting visuals flicker at the edges of vision — charred hands, faceless silhouettes, glassy eyes staring through the subject. The room appears to “reprogram” reality, compelling the subject to believe that its conditions are absolute and eternal.
$NEW
Perception of time is radically distorted. Most report feeling as if they have endured at least **ten hours** inside. Some describe experiencing an entire “second life” within the chamber — one defined solely by agony, isolation, and despair. In actuality, exposure endures only **15 to 20 seconds**.
$NEW
*Anomalous Device:*  
At the far end of the corridor, a small shelf juts from the wall, supporting a device resembling an elevator control panel. It bears a **single flat white button**, engraved with the image of a skull. Owing to their deteriorated mental state, subjects invariably perceive the button as their only remaining source of “hope.” Nearly all press it without hesitation.
$NEW
Activation results in the **instantaneous cessation of all biological functions** — death occurs within 0.2 seconds. Simultaneously, the entry door unlocks, and the room reverts to a neutral, dormant state, prepared for the next entrant.
$NEW
*Additional Notes:*  
In rare instances, subjects have **refused to press the button**, enduring the full psychological cycle instead. Recovery in such cases required **8 to 14 months**, often leaving lasting symptoms of dissociation, severe depression, and detachment from reality. One survivor characterized BU-614-1 as “an endless room that knows you better than you know yourself.”', 'f5574f7c-8661-4981-a34c-059fc2c56a6c') on conflict do nothing;
insert into public.room_translations (id, lang, name, description, room_id) values ('8bb92a29-9055-4a96-a933-18d079bb6303', 'ru_RU', 'Зеркальная комната', 'Все поверхности помещения — стены, пол, потолок и предметы — обладают зеркальной структурой.  
Внутри расположены комод, детская кровать, маленький стол и стул.
$IMG(INFO)
$AUTHOR(joseph)
$REVERSE
$NEW
Отражения в зеркальных поверхностях появляются с задержкой 1,5–2 секунды.
$NEW
Через 5 минут пребывания в комнате субъект начинает слышать приглушённое детское хныканье.<br/>  
Спустя 10–15 минут оно перерастает в плач, усиливающийся с каждой минутой.  <br/>
На 40-й минуте пребывания фиксируется повреждение барабанных перепонок и ухудшение слуха.  <br/>
Через 60 минут слух утрачивается без возможности восстановления.<br/>', 'b534ea05-0b13-4237-a3e5-c068a88a2da4') on conflict do nothing;
insert into public.room_translations (id, lang, name, description, room_id) values ('f9ca027f-dc25-469c-90f8-cd8fe76af9bd', 'en_US', 'Mirror room', 'All surfaces in the room—walls, floor, ceiling, and objects—have a mirrored structure.  
Inside, there is a chest of drawers, a child''s bed, a small table, and a chair.
$IMG(INFO)
$AUTHOR(joseph)
$REVERSE
$NEW
Reflections in the mirrored surfaces appear with a delay of 1.5–2 seconds.
$NEW
After 5 minutes in the room, the subject begins to hear muffled whimpering.<br/>  
After 10–15 minutes, it turns into crying, which gets louder with every minute.  <br/>
At the 40th minute of being in the room, damage to the eardrums and hearing impairment are recorded.  <br/>
After 60 minutes, hearing is lost without the possibility of recovery.', 'b534ea05-0b13-4237-a3e5-c068a88a2da4') on conflict do nothing;
insert into public.room_translations (id, lang, name, description, room_id) values ('76d51beb-5987-43eb-960e-64661ff703a2', 'en_US', 'Dining room 1', 'Inside FF-307-1 stands a large wooden table, its surface coated with an unidentified material that resists all forms of physical alteration and demonstrates exceptional durability. Surrounding the table are five wooden chairs, likewise impervious to any attempt at damage.
$IMG(INFO)
$AUTHOR(mark)
$REVERSE
$NEW
Upon the table rests a full set of dining utensils, forged from an unknown metal. These instruments retain their integrity under all conditions; they conform to standard shapes and dimensions, do not corrode, and never tarnish with the passage of time.
$NEW
In one corner of the room stands a refrigerator, containing an inexhaustible supply of foodstuffs, including bottled water, packaged salads, and fresh fruit. Its contents are observed to replenish automatically whenever they are consumed or removed.
$NEW
Above the sink—constructed from a material resistant to corrosion—hangs a metal rack with a sponge that likewise preserves its structure and hygienic properties indefinitely.
$NEW
However, any attempt to wash dishes after use or to deliberately spoil food from the refrigerator results in the sudden manifestation of an unidentified entity, which invariably terminates the subject.', 'dea77c22-d56c-49d5-a138-06bf0eafb572') on conflict do nothing;
insert into public.room_translations (id, lang, name, description, room_id) values ('8d433f25-2b44-4142-ae92-5389fc1e3d44', 'en_US', 'Non-reflective room', 'FA-311-1 is a completely enclosed space, the floor, walls, and ceiling of which are composed of an indeterminate material of unknown origin. This substance possesses unique properties — it entirely absorbs both light and sound, neither reflecting nor allowing them to propagate. As a result, the chamber remains in absolute darkness, devoid of any acoustics.
$IMG(INFO)
$AUTHOR(joseph)
$REVERE
$NEW
*Anomalous Behavior:*  
Immediately upon crossing the threshold, the subject is plunged into complete darkness and utter silence. The absence of visual and auditory stimuli induces a state of sensory deprivation, provoking feelings of isolation and detachment. Frequently recorded effects include ambivalence, a perceived rupture from reality, and a subjective slowing of time.
$NEW
*Psychological Impact:*  
In the initial stages of exposure within FA-311-1, subjects display mild anxiety, disorientation, and difficulty sustaining focus. Prolonged presence within the chamber intensifies these symptoms, leading to pronounced psychological strain, heightened anxiety, and panic responses. In certain cases, subjects experience a total disconnection from reality, accompanied by vivid hallucinations — both visual and auditory — despite the absence of any external stimuli.
<br/><br/><hr/><br/>
**Notes:**<br/>

- The material comprising the chamber’s structure resists all forms of study: every attempt to extract samples or apply instrumental force has yielded no results.<br/>
    
- In some subjects, post-exit effects included temporal distortion and difficulties readjusting to normal sensory environments, persisting from several hours to multiple days.', '36727e43-c677-4c26-9031-cb0196e940b2') on conflict do nothing;
insert into public.room_translations (id, lang, name, description, room_id) values ('e68820b8-bec2-41d2-81b6-d621ba65071c', 'ru_RU', 'Забытая вечеря', 'GT-114-1 — это прямоугольная комната с высокими потолками и мягким рассеянным светом, будто исходящим **не от конкретного источника**, а проникающим сквозь сам воздух. Центром помещения является **прямоугольный деревянный стол** с массивной, искусно резной **скамьёй**, выполненными в стиле позднего Ренессанса. Поверхности покрыты лаком, но имеют лёгкий налёт времени, как будто предметы здесь стоят **несколько столетий**.
$IMG(INFO)
$AUTHOR(mark)
$REVERSE
$NEW
Комната оформлена с очевидной отсылкой к известной фреске Леонардо да Винчи — «Тайная вечеря». **Настенные фрески**, архитектурные элементы, даже геометрия пространства будто подстраиваются под перспективу картины. Однако за столом **никого нет**. Ни учеников, ни Христа. Только пустота — и дванадцать пустых мест, словно всё было приготовлено для давно не пришедших гостей.
$NEW
*Аномальные эффекты:*  
Сразу после входа в помещение субъект начинает испытывать **тонкое, труднообъяснимое чувство утраты**. Независимо от возраста, характера или опыта, субъекты описывают его как **ностальгию по чему-то незнакомому, но важному**, как будто они забыли событие, которое когда-то определяло их личность. В некоторых случаях зафиксированы **слёзы без видимой причины**.
$NEW
Если субъект **садится за стол**, эмоциональное состояние изменяется:<br/><br/>

&nbsp;&nbsp;&nbsp;&nbsp;- В течение первых **30 секунд** возникает ощущение спокойствия и внутренней тишины.<br/>
    
&nbsp;&nbsp;&nbsp;&nbsp;- После первой минуты — **восторг**, субъекты начинают верить, что их существование имеет уникальный смысл.<br/>
    
&nbsp;&nbsp;&nbsp;&nbsp;- Через 3–5 минут у большинства начинает формироваться **так называемый "эффект избранного"**: ощущение, будто они являются центром чего-то великого.<br/>
    
&nbsp;&nbsp;&nbsp;&nbsp;- Если субъект сидит более 7 минут, начинается **перерастание в "синдром бога"**:<br/>
    
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;а) Они отказываются покидать комнату,<br/>
        
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;б) требуют поклонения,<br/>
        
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;в) уверены, что способны решать судьбы других.
$NEW
По истечении 10 минут сидения большинство субъектов начинают **отождествлять себя с мессианскими фигурами**, в т.ч. с Иисусом Христом, Буддой, а в редких случаях — с богами античного пантеона. Некоторые отказываются говорить на родном языке, переходя на латынь или древнегреческий, даже если ранее его не знали.
$NEW
*Визуальные детали:*<br/><br/>

&nbsp;&nbsp;&nbsp;&nbsp;- На столе нет еды, но присутствуют **пустые блюда и кубки**.<br/>
    
&nbsp;&nbsp;&nbsp;&nbsp;- Если попытаться принести еду — она теряет вкус, а некоторые продукты начинают **исчезать на глазах**, как будто поглощаются невидимой силой.<br/>
    
&nbsp;&nbsp;&nbsp;&nbsp;- При долгом нахождении в комнате, субъекты утверждают, что **слышат тихие молитвы**, шёпоты или обрывки фраз на итальянском языке XVI века.<br/>
    
&nbsp;&nbsp;&nbsp;&nbsp;- На стенах — **еле заметные следы человеческих фигур**, будто они были стёрты из композиции.
    
$NEW
*Безопасность и меры предосторожности:*  
GT-114-1 не оказывает физического вреда, однако **психологическое воздействие оценивается как умеренно опасное**. Субъекты, находившиеся за столом более 10 минут, в дальнейшем нуждаются в длительной психореабилитации и, в некоторых случаях, принудительной изоляции.
$NEW
**Рекомендации:**<br/>

- Субъекты допускаются внутрь только под наблюдением.<br/>
    
- Запрещено находиться за столом более 3 минут без протокола АА-4.<br/>
    
- После каждого визита проводится когнитивный тест и проверка логической связности речи.', 'bf1769cf-91d4-4128-918f-cfbc102e0c67') on conflict do nothing;
insert into public.room_translations (id, lang, name, description, room_id) values ('27601b1b-48f6-40bc-82ee-4e96ee032570', 'en_US', 'The forgotten supper', 'GT-114-1 is a rectangular chamber with high ceilings and a soft, diffused light that appears to emanate not from any specific source, but rather from **within the air itself**. At the center stands a large **rectangular wooden table** accompanied by a single, intricately carved **bench** in the style of the late Renaissance. Though lacquered, both surfaces bear a subtle patina of age, as if they have stood here **for centuries**.
$IMG(INFO)
$AUTHOR(mark)
$REVERSE
$NEW
The entire room is styled with a **clear reference to Leonardo da Vinci’s "The Last Supper"**. Wall frescoes, architectural elements, and even the geometry of the space itself appear arranged to mimic the painting’s composition and perspective. Yet **no one sits at the table**. No disciples. No Christ. Only emptiness—and twelve vacant places, as though all had been prepared for guests who never arrived.
$NEW
*Anomalous Effects:*  
Upon entering GT-114-1, subjects immediately begin to experience a **subtle, inexplicable sense of loss**. Regardless of age, personality, or background, individuals describe it as **nostalgia for something unknown yet deeply significant**—as if they had forgotten a moment that once defined who they are. In some cases, this feeling leads to **spontaneous tears**.
$NEW
If a subject **sits at the table**, their emotional state changes as follows:<br/><br/>

&nbsp;&nbsp;&nbsp;&nbsp;- **0–30 seconds:** A deep sense of calm and internal silence.<br/>
    
&nbsp;&nbsp;&nbsp;&nbsp;- **1 minute:** A surge of **euphoria**, accompanied by the belief that their life holds unique meaning.<br/>
    
&nbsp;&nbsp;&nbsp;&nbsp;- **3–5 minutes:** The onset of the **“Chosen One” effect**—a conviction of being central to some grand cosmic plan.<br/>
    
&nbsp;&nbsp;&nbsp;&nbsp;- **After 7 minutes:** The effect evolves into what is referred to as the **“God Complex”:****:<br/>
    
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a) Refusal to leave the room;<br/>
        
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;b) Demands for reverence or submission;<br/>
        
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;c) Belief in the ability to control the fate of others.
$NEW
**After 10 minutes:** Subjects begin to **identify as messianic or divine figures**—Jesus Christ, the Buddha, or, in rare cases, deities from classical mythology. Some cease speaking in their native language, switching to **Latin or Ancient Greek**, even if they had no prior knowledge of either.
$NEW
*Visual Details:*<br/><br/>

&nbsp;&nbsp;&nbsp;&nbsp;- The table is devoid of food, yet **empty dishes and chalices** are neatly arranged.<br/>
    
&nbsp;&nbsp;&nbsp;&nbsp;- Attempts to bring food into the room result in **loss of flavor**, and in some cases, **gradual vanishing** of the food, as if consumed by an unseen force.<br/>
    
&nbsp;&nbsp;&nbsp;&nbsp;- During extended presence in the room, subjects report **faint prayers or whispers**, often in **16th-century Italian dialects**.<br/>
    
&nbsp;&nbsp;&nbsp;&nbsp;- Subtle **human-shaped smudges** can be observed on the frescoes, as though figures were **intentionally erased** from the composition.
    
$NEW
*Safety and Precautions:*  
GT-114-1 causes **no physical harm**, but its **psychological impact is considered moderately hazardous**. Subjects who remain seated for more than 10 minutes often require **prolonged rehabilitation and, in some cases, isolation**.
$NEW
**Recommendations:**<br/>

- Entry allowed **only under supervision**.<br/>
    
- **No one is to sit at the table for more than 3 minutes** without Protocol AA-4 authorization.<br/>
    
- **Post-visit evaluation** must include a cognitive coherence test and speech analysis.', 'bf1769cf-91d4-4128-918f-cfbc102e0c67') on conflict do nothing;
insert into public.room_translations (id, lang, name, description, room_id) values ('dea74350-c9b6-4418-9d59-82fb00a0cace', 'ru_RU', 'Неотражающая комната', 'FA-311-1 представляет собой полностью замкнутое пространство, поверхность пола, стен и потолка которого выполнена из неопределённого материала неизвестного происхождения. Этот материал обладает уникальными свойствами — он полностью поглощает свет и звук, не отражая их и не позволяя им распространяться. Вследствие этого помещение остаётся абсолютно чёрным и лишённым какой-либо акустики.
$IMG(INFO)
$AUTHOR(joseph)
$REVERSE
$NEW
*Аномальное поведение:*  
Сразу после пересечения порога субъект оказывается погружён в абсолютную темноту и полную тишину. Отсутствие зрительных и слуховых стимулов приводит к эффекту сенсорной депривации, вызывая у субъекта чувство изоляции и отчуждения. Часто фиксируются состояния амбивалентности, ощущение разрыва с реальностью, а также субъективное замедление времени.
$NEW
*Воздействие на психику:*  
На первых этапах пребывания в FA-311-1 у испытуемых отмечаются лёгкое беспокойство, дезориентация и трудности с поддержанием концентрации. Длительное нахождение в помещении усугубляет симптомы: фиксируется развитие выраженного психологического напряжения, тревожных состояний и панических реакций. В ряде случаев наблюдается полная потеря ощущения реальности, сопровождающаяся галлюцинациями — визуальными и слуховыми, хотя никаких источников стимулов в комнате не существует.
<br/><br/><hr/><br/>
**Примечания:**<br/>

- Материал, из которого состоят стены и перекрытия помещения, не поддаётся исследованию: все попытки отбора образцов или применения инструментального воздействия окончились безрезультатно.<br/>
    
- У некоторых субъектов после выхода из комнаты сохранялись нарушения восприятия времени и трудности с адаптацией к привычной сенсорной среде, продолжавшиеся от нескольких часов до нескольких суток.', '36727e43-c677-4c26-9031-cb0196e940b2') on conflict do nothing;
insert into public.room_translations (id, lang, name, description, room_id) values ('66750bef-977d-47bd-8725-4471ae734690', 'ru_RU', 'Собеседники', 'JG-359-1 представляет собой зал средних размеров, стены и пол которого выполнены из светлого камня с многочисленными трещинами и налётом пыли. Вдоль периметра помещения расположены несколько каменных статуй, по форме напоминающих человеческие фигуры, однако их черты лица и позы различаются. Некоторые обращены друг к другу, словно ведут оживлённый спор, другие слегка наклонены вперёд, создавая впечатление заинтересованного собеседника. Атмосфера помещения насыщена гулом множества голосов: статуи непрерывно разговаривают между собой, их слова сливаются в монотонный хор, в котором различить отдельные фразы практически невозможно.
$IMG(INFO)
$AUTHOR(ivan)
$REVERSE
$NEW
*Аномальное поведение:*  
При появлении субъекта в JG-359-1 статуи прерывают общение между собой и обращают внимание на посетителя. Они активно пытаются вовлечь его в диалог, задавая вопросы, предлагая поддержать беседу или реагируя на малейшее высказывание. Если субъект вступает в разговор, он теряет возможность самостоятельно прекратить общение: любые попытки замолчать сопровождаются настойчивым давлением со стороны статуй, которые продолжают обращаться к нему, пока он не отвечает.
$NEW
*Механика воздействия:*  
После начала диалога запускается необратимый процесс трансформации. В течение 1–2 часов у субъекта фиксируется постепенное окаменение тканей и костей, сопровождающееся снижением подвижности, болевым синдромом и чувством сильной тяжести в теле. К моменту завершения процесса субъект полностью превращается в статую, при этом его сознание остаётся функционирующим. Согласно собранным данным, петрификация необратима, и освобождения от этого состояния не зафиксировано.
$NEW
*Воздействие при эвакуации:*  
В случае, если субъекту удаётся покинуть помещение до завершения превращения, процесс окаменения прекращается, однако зафиксированы тяжёлые последствия: мозг подвергается необратимым повреждениям, затрагивающим память, когнитивные способности и эмоциональную сферу. Такие субъекты демонстрируют выраженные расстройства — амнезию, утрату способности к концентрации, эмоциональную нестабильность, а также признаки хронической депрессии.
<br/><br/></hr><br/>
**Примечания:**<br/>

- Все зафиксированные внутри помещения статуи обладают признаками некогда живых субъектов. Их позы и выражения лиц отражают широкий спектр эмоций — от ужаса и мольбы о помощи до спокойного смирения.<br/>
    
- Попытки взаимодействия с объектами без вступления в вербальный контакт (например, через запись или наблюдение) не приводят к активации аномальных свойств.<br/>
    
- Длительное пребывание в помещении без диалога вызывает у субъектов чувство нарастающего давления и навязчивое желание вступить в разговор.', 'c7ebc1db-57ed-4281-ba74-a27b3bd95200') on conflict do nothing;
insert into public.room_translations (id, lang, name, description, room_id) values ('93fb08a9-9d65-40e2-9ee3-8ba2fec07506', 'en_US', 'Interlocutors', 'JG-359-1 is a hall of moderate size, its walls and floor constructed from pale stone, marred by numerous cracks and a fine layer of dust. Along the perimeter stand several stone statues, each resembling a human figure, though their facial features and postures vary. Some appear to face one another in the midst of a spirited debate, while others lean slightly forward, conveying the impression of an attentive interlocutor. The atmosphere of the hall is saturated with a resonant murmur of countless voices: the statues engage in ceaseless conversation, their words merging into a monotonous chorus in which individual phrases are nearly impossible to discern.
$NEW
*Anomalous Behavior:*  
Upon the entry of a subject into JG-359-1, the statues abruptly cease their exchanges and turn their attention toward the visitor. They actively attempt to draw the subject into dialogue, posing questions, prompting responses, and reacting even to the faintest utterance. Should the subject engage in conversation, they lose the ability to disengage at will: every attempt to remain silent is met with insistent pressure from the statues, which persist in addressing the individual until a reply is given.
$NEW
*Mechanism of Influence:*  
Once dialogue is initiated, an irreversible process of transformation begins. Over the span of one to two hours, the subject undergoes progressive petrification of tissues and bones, accompanied by diminishing mobility, acute pain, and an overwhelming sensation of bodily heaviness. By the conclusion of this process, the subject is entirely transformed into stone, while consciousness remains intact. Collected data indicates that petrification is irreversible, with no instances of recovery recorded.
$NEW
*Effects of Evacuation:*  
If the subject succeeds in leaving the chamber prior to the completion of the transformation, the process halts. However, severe and lasting consequences are observed: the brain sustains irreversible damage, impairing memory, cognitive function, and emotional regulation. Such individuals exhibit profound disorders — amnesia, diminished capacity for focus, emotional instability, and symptoms consistent with chronic depression.
<br/><br/><hr/><br/>
**Notes:**<br/>

- All statues observed within the chamber display signs of having once been living subjects. Their poses and facial expressions embody a wide range of emotions, from terror and desperate pleas for help to calm resignation.<br/>
    
- Attempts to interact with the statues without engaging in verbal communication (e.g., through recordings or passive observation) do not activate anomalous properties.<br/>
    
- Prolonged presence in the chamber without dialogue induces a mounting sensation of psychological pressure and an intrusive compulsion to converse.', 'c7ebc1db-57ed-4281-ba74-a27b3bd95200') on conflict do nothing;
insert into public.room_translations (id, lang, name, description, room_id) values ('2146e170-6db5-442c-a514-944367715c5c', 'ru_RU', 'Столовая 2', 'JI-229-1 имеет матовые серые стены, напоминающие **полированный бетон**. Потолок излучает мягкое, ровное свечение, не создавая резких теней**. Температура держится на уровне примерно **22°C**, а воздух сухой, со слабым запахом **мыла и древесной пыли**.
$IMG(INFO)
$AUTHOR(mark)
$REVERSE
$NEW
В центре комнаты стоит **идеально круглый стол** диаметром в один метр, сделанный из темного лакированного дерева с видимой текстурой кольца роста. По разные стороны от стола стоят два стула: один - **простой, но элегантный**, выполненный из того же материала, что и стол; другой - **гораздо массивнее**, сделан из вещества, напоминающего одновременно **металл и дерево**, но на ощупь не похожего ни на одно из них. Он не обладает **теплопроводностью**, и попытки сдвинуть его с места не увенчались успехом - **его вес неизмерим** и не поддается никаким известным инструментам или механизмам.
$NEW
*Обстановка стола и аномалии:*  
Стол накрыт на двоих, с фарфоровыми тарелками, столовыми приборами из нержавеющей стали и стеклянными бокалами в классическом европейском стиле. Однако **каждый предмет содержит один большой человекоподобный глаз**, вмонтированный в ручки посуды, чаши ложек, а также внутрь чашек и бокалов.
<br/><br/>
- Глаза влажные, подвижные, периодически моргают** с тихим щелкающим звуком.<br/>
    
- Все глаза **следят за движениями субъекта в идеальный унисон**, оставаясь пространственно неподвижными, но реагируя на повороты головы, жесты и шаги.
    

$NEW
*Тактильные эффекты:*.  
Прикосновение к любому из глаз вызывает глубоко тревожные ощущения: испытуемые сообщают, что это **очень похоже на прикосновение к их собственным глазам**, включая подсознательный страх причинить вред. Несмотря на это, **фактического вреда не происходит**, и глаза остаются неповрежденными и неподвижными даже при сильных манипуляциях.
$NEW
*Дополнительные характеристики:*<br/><br/>

- В **северо-западном углу** стоит **раковина**, встроенная в бежево-серую прямоугольную стойку.<br/>
    
    - Материал раковины и стойки **устойчив к любым формам анализа и разрушения** - резка, сверление и тупая сила не оставляют следов.<br/>
        
    - Кран выдает **горячую воду с постоянной температурой 65°C**, независимо от времени и вмешательства.<br/>
        
    - Вдоль обода лежит **желтая губка**. Ее форма неправильная, а текстура напоминает гибрид **резины и ткани**. Ее невозможно порвать, прожечь или износить, даже после длительного использования. **Попытки проанализировать ее состав или состав воды не увенчались успехом**.
        
$NEW
**Другие наблюдения:**<br/>

- Еда отсутствует, и нет **следов приготовления или употребления**.<br/>
    
- Ни один из предметов в комнате не проявляет движения или агрессии.<br/>
$NEW
**Возможное назначение:**
Неизвестно. Некоторые исследователи предполагают, что **JI-229-1 имитирует ритуальную трапезу или социальную встречу**, при этом субъект играет определенную роль. Однако **«приглашенный гость» никогда не приходит**, оставляя ритуал вечно незавершенным.', '7b6485bd-7fa1-46cc-88d4-9370433d75c9') on conflict do nothing;
insert into public.room_translations (id, lang, name, description, room_id) values ('1378098a-c08e-426d-90f8-c6d8bebf22c6', 'en_US', 'Dining room 2', 'JI-229-1 features matte grey walls, reminiscent of **polished concrete**. The ceiling emits a soft, even glow, producing **no harsh shadows**. The temperature remains stable at approximately **22°C**, and the air is dry, carrying a faint scent of **soap and wood dust**.
$IMG(INFO)
$AUTHOR(mark)
$REVERSE
$NEW
At the center of the room stands a **perfectly round table** one meter in diameter, made of dark lacquered wood with a visible growth-ring texture. Two chairs are positioned on opposite sides of the table: one is **simple yet elegant**, crafted from the same material as the table; the other is **much more massive**, made of a substance that resembles both **metal and wood**, yet feels like neither. It has **no thermal conductivity**, and attempts to move it have failed — **its weight is immeasurable** and unaffected by any known tool or mechanism.
$NEW
*Table Setting and Anomalies:*  
The table is set for two, with porcelain plates, stainless steel cutlery, and glass goblets in a classical European style. However, **each item contains a single large humanoid eye**—embedded in the handles of the utensils, the bowls of the spoons, and inside the cups and goblets.
<br/><br/>
- The **eyes are moist, mobile, and blink periodically** with a soft clicking sound.<br/>
    
- All eyes **track the subject’s movements in perfect unison**, remaining spatially fixed but reacting to head turns, gestures, and footsteps.
    

$NEW
*Tactile Effects:*.  
Touching any of the eyes produces a deeply disturbing sensation: subjects report that it feels **exactly like touching their own eyes**, including a visceral fear of causing damage. Despite this, **no actual harm occurs**, and the eyes remain intact and unmovable, even under forceful manipulation.
$NEW
*Additional Features:*<br/><br/>

- In the **northwest corner** stands a **sink** built into a beige-grey rectangular counter.<br/>
    
    - The material of the sink and counter **resists all forms of analysis and destruction** — cutting, drilling, and blunt force leave no marks.<br/>
        
    - The faucet produces **hot water at a constant 65°C**, regardless of time or interference.<br/>
        
    - A **yellow sponge** rests along the rim. Its shape is irregular, and its texture suggests a hybrid of **rubber and fabric**. It cannot be torn, burned, or worn down, even after extended use. **Attempts to analyze its composition or that of the water have failed**.
        
$NEW
**Other Observations:**<br/>

- No food is present, and there are **no signs of cooking or consumption**.<br/>
    
- None of the objects in the room exhibit movement or aggression.<br/>
$NEW
**Possible Purpose:**
Unknown. Some researchers hypothesize that **JI-229-1 simulates a ritual meal or social encounter**, with the subject playing a defined role. However, the **“invited guest” never arrives**, leaving the ritual eternally incomplete.', '7b6485bd-7fa1-46cc-88d4-9370433d75c9') on conflict do nothing;
insert into public.room_translations (id, lang, name, description, room_id) values ('0b579bae-2537-4464-b579-267aad1ac650', 'en_US', 'They see you', 'FA-312-1 is clad in weathered gray ceramic tiles, many of which are cracked or wholly absent. The ceiling is composed of metallic panels that emit a barely audible hum from the ventilation system; some subjects assert this hum occasionally ceases, plunging the corridor into an _oppressive silence_. The walls are encrusted with layers of dust and dark, streak-like stains of indeterminate origin. Sections of the floor bear footprints traveling in both directions — the footwear that produced them does not correspond to that of any subjects known to have entered the room.
$IMG(INFO)
$AUTHOR(mark)
$REVERSE
$NEW
*Anomalous Behavior:*  
The primary anomaly of FA-312-1 manifests under **low-light conditions**. As visibility diminishes, SIT has documented appearances of the entity designated **M-001-BF**, commonly referred to as **“The Watcher.”** Upon activation of any light source — including handheld devices — the entity instantaneously relocates to the nearest unlit area with inhuman velocity. Under full illumination the entity becomes invisible, though **its presence persists**, detectable through psychological disturbances and auditory hallucinations. Subjects report sounds resembling breathing, footsteps, and faint scratching against metal. Any shadowed or darkened recess may conceal the entity’s new position.
$NEW
*Psychological Effects:*  
After roughly seven minutes within the corridor, most subjects begin to experience **increasing unease**. Between ten and fifteen minutes, signs of **mild paranoia** emerge: subjects repeatedly glance over their shoulders, whisper, cling to the walls, and express the conviction that they are being observed. Some describe perceiving **“eyes flickering in mid-air”** at the periphery of their vision. Panic attacks are common after twenty minutes, particularly during partial failures of illumination.
$NEW
*SIT: M-001-BF — The Watcher* <br/><br/>

**General Description:** 
A cluster of **two to five disembodied eyes**, capable of autonomous, silent movement through shadowed spaces.
<br/><br/>
**Behavioral Characteristics:**<br/>

- **Light Sensitivity:** The Watcher is acutely reactive to light. When illumination reaches its locus, the eyes vanish and instantly reappear in the nearest unlit area. This displacement is **instantaneous and utterly silent**.<br/>
    
- **Inaccessibility:** Attempts to approach the eyes provoke their immediate disappearance. At distances under three meters, the eyes either retreat into shadow or become imperceptible. Recording devices register only **brief spikes of electromagnetic interference** during these intervals.<br/>
    
- **Persistent Presence:** The entity has never been observed to leave FA-312-1. Even under complete illumination, subjects report **a continual sensation of being watched** and note subtle **movements within their peripheral vision**.
', 'ee9fe4c2-548c-4a9b-93f8-20629ddfaa84') on conflict do nothing;
insert into public.room_translations (id, lang, name, description, room_id) values ('27460783-a6d9-449f-87cb-f951493b7516', 'ru_RU', 'Они тебя видят', 'FA-312-1 покрыт серым керамическим кафелем с заметными признаками старения — местами плитка треснута или полностью отсутствует. Потолок, состоящий из металлических панелей, издает едва различимый гул, вызванный вентиляцией, которая, по заявлениям некоторых субъектов, временами «замолкает», создавая ощущение удушающей тишины. Стены коридора покрыты слоем пыли и темных разводов, источники которых до конца не изучены. Отдельные участки пола испещрены следами шагов, ведущими в обе стороны, при этом обувь, оставившая их, не соответствует ни одному из допущенных в помещение субъектов.
$IMG(INFO)
$AUTHOR(mark)
$REVERSE
$NEW
*Аномальное поведение:*  
Основная аномалия FA-312-1 проявляется при снижении уровня освещения. В условиях недостаточной видимости в коридоре фиксируется появление объекта SIT: M-001-BF — "Наблюдателя". При включении любого источника света, включая ручные фонари, он мгновенно перемещается в ближайшее неосвещённое пространство, демонстрируя невозможную для человека скорость. Полное освещение приводит к его исчезновению из поля зрения, однако аномалия остаётся в пределах помещения — её присутствие можно ощутить через внутреннее напряжение и слуховые галлюцинации: субъекты сообщают о звуках шагов, дыхания и царапания по металлу. Любая тень, любой тёмный участок пространства может стать его новым местоположением.
$NEW
*Воздействие на психику:*  
При нахождении в коридоре более 7 минут у большинства испытуемых наблюдается растущее беспокойство. Через 10–15 минут пребывания фиксируется развитие лёгкой паранойи: субъекты начинают оборачиваться, вслушиваться в звуки, прижиматься к стенам и говорить о «чьём-то присутствии». Некоторые утверждают, что видели боковым зрением глаза, «мерцающие в воздухе». После 20 минут в помещении возможны приступы паники, особенно в случае частичного отключения света.
$NEW
*SIT: M-001-BF — Наблюдатель* <br/><br/>

**Общее описание:**  
Скопление от двух до пяти глаз, свободно перемещающихся в темноте.

**Характеристики и поведение:**<br/>

- **Реакция на освещение:** Наблюдатель проявляет крайнюю чувствительность к свету. При освещении участка, где находится объект, глаза исчезают, перемещаясь в другую неосвещённую часть помещения. Этот переход происходит беззвучно и мгновенно.<br/>
    
- **Физическая невозможность взаимодействия:** Попытки приблизиться к глазам приводят к их исчезновению. При дистанции менее 3 метров они либо отступают в тень, либо перестают быть видимыми. Устройства записи фиксируют лишь кратковременные всплески электромагнитных помех.<br/>
    
- **Присутствие:** Объект никогда не покидает FA-312-1. Даже в условиях полного освещения субъекты продолжают ощущать на себе «взгляд» или замечать движения в периферии зрения.', 'ee9fe4c2-548c-4a9b-93f8-20629ddfaa84') on conflict do nothing;
-- story_category: 2 rows
insert into public.story_category (id, title, lang) values ('1', 'Основной сюжет', 'ru_RU') on conflict do nothing;
insert into public.story_category (id, title, lang) values ('2', 'Main story', 'en_US') on conflict do nothing;
select setval(pg_get_serial_sequence('public.story_category','id'), (select coalesce(max(id),0)+1 from public.story_category), false);
-- stories: 2 rows
insert into public.stories (id, title, text, date, reading_time, category, lang) values ('b5f44aa4-eb7f-4775-b6f4-02dca165b103', 'Добро пожаловать в Voeemsog', 'Молодая девушка лет 20-25 — Рина — подошла к кассе с полной тележкой продуктов, включая фрукты, овощи и замороженное мясо. За прилавком никого не было, а на нем лежала пепельница с сигаретой, которая дотлела до конца и оставила много пепла.

— Простите, можно кого-нибудь к кассе, пожалуйста? — Рина крикнула вглубь магазина, но никто не ответил. Только тогда она заметила, что в магазине вообще никого нет — ни персонала, ни покупателей.

Она постояла еще несколько минут прежде чем направилась в сторону подсобного помещения. 

—  Простите? — Рина постучала в дверь. Тишина.

Рина слегка толкнула дверь, подсобка была полностью темной.

— Извините, я не хотела сюда заходить, но я спешу…

Тишина.

Рина сделала пару шагов внутрь, и кто-то закрыл за ней дверь.
Она рванула назад и открыла дверь, но за ней был не магазин, а комната 5 на 5 метров, обклеенная плакатами с одинаковым текстом:

“Внимание. Если вы читаете этот текст и не понимаете что происходит, вынуждены вам сообщить, что, к сожалению, вы попали в измерение Воеемсог. Пожалуйста, соблюдайте простые правила и будете обезопашены:
    1. Оставайтесь в безопасных комнатах, не паникуйте.
    2. Ждите. Вас найдут, вам помогут.
    3. Не спите в углу.
    4. Не мойте за собой посуду.
    5. Не общайтесь ни с кем, кроме людей.
    6. Не входите в особо опасные зоны. Они обозначены плакатами.”

Рину охватила паника — она открывала двери одну за одной, игнорируя правила.
Десятая комната была окутана кромешной тьмой. Рина побежала вперед, когда на нее накинулось маленькое существо. Его плюшевые конечности вцепились в плечи Рины. Она пыталась сопротивляться, но физическая сила существа сильно превосходила силу Рины, несмотря на его крошечные размеры. Существо выпустило когти и быстро отрубило девушке обе руки. Рина, пораженная болевым шоком, повалилась на бетонный пол.
', '2025-11-24', '2', '1', 'ru_RU') on conflict do nothing;
insert into public.stories (id, title, text, date, reading_time, category, lang) values ('5b093bbc-a314-4b54-aac4-a5d05fe9608b', 'Welcome to Voeemsog', 'A young woman aged 20-25 named Rina approached the checkout with a full shopping cart of groceries, including fruit, vegetables, and frozen meat. There was no one behind the counter, but there was an ashtray with a cigarette that had burned down to the end and left a lot of ash.

“Excuse me, could someone come to the checkout, please?” Rina called out into the store, but no one answered. Only then did she notice that there was no one in the store at all — no staff, no customers.

She stood there for a few more minutes before heading toward the back room. 

“Excuse me?” Rina knocked on the door. Silence.

Rina pushed the door slightly; the back room was completely dark.

“Sorry, I didn''t mean to come in here, but I''m in a hurry...”

Silence.
Rina took a couple of steps inside, and someone closed the door behind her.
She rushed back and opened the door, but behind it was not a store, but a 5x5 meter room covered with posters with the same text:

"Attention. If you are reading this text and do not understand what is happening, we are sorry to inform you that unfortunately you have entered the Voeemsog dimension. Please follow these simple rules and you will be safe:
    1. Stay in safe rooms, do not panic.
    2. Wait. You will be found, you will be helped.
    3. Do not sleep in the corner.
    4. Do not wash the dishes after yourself.
    5. Do not communicate with anyone except humans.
    6. Do not enter particularly dangerous areas. They are marked with posters.”

Rina panicked — she opened the doors one after another, ignoring the rules.
The tenth room was shrouded in pitch darkness. Rina ran forward when a small creature pounced on her. Its plush limbs clung to Rina''s shoulders. She tried to resist, but the creature''s physical strength far exceeded Rina''s, despite its tiny size. The creature released its claws and quickly severed both of the girl''s arms. Rina, struck by pain shock, fell to the concrete floor.
', '2025-11-30', '2', '2', 'en_US') on conflict do nothing;

commit;
