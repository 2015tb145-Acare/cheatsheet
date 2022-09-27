# Expressions régulières régulièrement utilisées

## Vérifier la validité d'une adresse email #1

sous la forme abc123@cde456.aa ou abc123@cde456.aaa

` /^[^\W][a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\@[a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\.[a-zA-Z]{2,4}$/ `

## Vérifier la validité d'un code postal #2

sous la forme 00000

` \^[0-9]{5,5}$\ `


## Vérifier la validité d'un numéro de téléphone #3

sous la forme 0000000000

` \^(\d\d\s){4}(\d\d)$\ `

## Vérifier la validité d'une date #4

sous la forme 00/00/0000

` \^([0-3][0-9]})(/)([0-9]{2,2})(/)([0-3]{2,2})$\ `

## Vérifier la validité d'une l’url d’un site web #5

sous la forme sous-domaine : www et/ou protocole : http ou https ou ftp

` \^(http|https|ftp):\/\/([\w]*)\.([\w]*)\.(com|net|org|biz|info|mobi|us|cc|bz|tv|ws|name|co|me)(\.[a-z]{1,3})?\z/i `

## Vérifier la validité d’un pseudo ou un login #6

sous la forme abc123

` \^[a-zA-Z0-9_]{3,16}$\ `

## Vérifier la validité d’une adresse ip #7

sous la forme 000.000.000.0

` \^(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:[.](?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}$\ `

## Vérifier la validité d’un code couleur hexadécimale #8

sous la forme #123456

` \^#(?:(?:[a-f\d]{3}){1,2})$/i `
