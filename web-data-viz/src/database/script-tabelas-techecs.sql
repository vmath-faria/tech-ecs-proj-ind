create database techecs;
use techecs;
create table questao(
idQuestao int primary key,
descricao varchar(200));
create table resultadoquiz(
fkUsuario int,
acertou tinyint,
fkQuestao int,
foreign key (fkQuestao) references questao(idQuestao),
foreign key (fkUsuario) references usuario(idUsuario));
create table usuario(
idUsuario int primary key auto_increment,
username varchar(45),
email varchar(45),
senha varchar(45),
fkAlbum int,
qtAcertadas int,
foreign key (fkAlbum) references album(idAlbum));
create table album(
idAlbum int primary key auto_increment,
yrRelease int,
titulo varchar(255),
descricao varchar(255),
vocalista varchar(255));
insert into questao values
(1, "Qual integrante da banda nunca saiu?"),
(2, "Quantos álbuns a banda lançou?"),
(3, 'Álbum Mais Vendido:'),
(4, 'Quantos cantores gravaram álbuns pela banda?'),
(5, "Ano de lançamento do álbum 'Headless Cross':"),
(6, 'Que cover o BLACK SABBATH fez durante a turnê desse álbum?'),
(7, 'Qual foi o último álbum com Ozzy Osbourne antes de sua 1ª saída?'),
(8, 'Que instrumento cada integrante toca?');
insert into album (idAlbum, titulo, descricao, vocalista, yrRelease) values
	(1, 'Black Sabbath', 'Primeiro álbum da banda', 'Ozzy Osbourne', 1970),
		(2, 'Paranoid', 'Álbum mais famoso', 'Ozzy Osbourne', 1970),
			(3, 'Master of Reality', 'Início do Doom Metal', 'Ozzy Osbourne', 1971),
				(4, 'Vol.4', 'Contém a faixa preferida de Zappa e Bonham', 'Ozzy Osbourne', 1972),
					(5, 'Sabbath Bloody Sabbath', 'Participação especial do Rick Wakeman', 'Ozzy Osbourne', 1973), 
						(6, 'Sabotage', 'Álbum contra os empresários da banda', 'Ozzy Osbourne', 1975),
							(7, 'Technical Ecstasy', 'Álbum-título do Projeto', 'Ozzy Osbourne', 1976),
								(8, 'Never Say Die!', 'Último álbum de Ozzy antes de sair', 'Ozzy Osbourne', 1978), 
									(9, 'Heaven and Hell', 'Primeiro álbum de Ronnie James DIO', 'Ronnie James DIO', 1980),
										(10, 'Mob Rules', 'Primeiro álbum com Vinnie Appice', 'Ronnie James DIO', 1981),
											(11, 'Born Again', 'Álbum mais macabro do BLACK SABBATH', 'Ian Gillan', 1983),
												(12, 'Seventh Star', 'Único álbum com Glenn Hughes', 'Glenn Hughes', 1986),
													(13, 'The Eternal Idol', 'Vocais gravados às pressas', 'Tony Martin', 1987),
														(14, 'Headless Cross', 'Primeiro álbum bom Cozy Powell', 'Tony Martin', 1989),
															(15, 'TYR', 'Álbum Viking!', 'Tony Martin', 1990),
																(16, 'Dehumanizer', 'Mesma lineup do Mob Rules', 'Ronnie James DIO', 1992),
																	(17, 'Cross Purposes', 'Álbum Grunge!', 'Tony Martin', 1994),
																		(18, 'Forbidden', 'Álbum Rap!', 'Tony Martin', 1995),
																			(19, 'The Devil You Know', 'Último álbum do Ronnie James DIO', 'Ronnie James DIO', 2009),
																				(20, '13', 'Último álbum do BLACK SABBATH', 'Ozzy Osbourne', 2013);
select (select count(idUsuario) from usuario where qtAcertadas<3) as "AIGI",
            (select count(idUsuario) from usuario where qtAcertadas<7 and qtAcertadas>=3) as "NK",
                (select count(idUsuario) from usuario where qtAcertadas>=7) as "SN",
                    (select q.descricao from questao as q join resultadoquiz as r on r.fkQuestao=q.idQuestao
                            group by q.idQuestao order by SUM(r.acertou) desc limit 1) as "MQ"
                                from resultadoquiz join usuario on fkUsuario=idUsuario
                                    join questao on fkQuestao=idQuestao limit 1;


